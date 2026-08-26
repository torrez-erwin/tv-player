const TOKEN_URL = 'https://magisvideo.com/token_flow_automatico/token.json';
const CONTENT_API = 'https://contentapi-ar.cdn.telefonica.com';

let playerInstance = null;
let tokenData = null;
let tokenExpiry = null;
let currentChannel = null;
let retryCount = 0;
const MAX_RETRIES = 3;

function initPlayer() {
  jwplayer.key = 'XSuP4qMl+9tK17QNb+4+th2Pm9AWgMO/cYH8CI0HGGr7bdjo';
  playerInstance = jwplayer('player');
}

async function getToken() {
  if (tokenData && tokenExpiry && Date.now() < tokenExpiry) {
    return tokenData;
  }

  try {
    const response = await fetch(TOKEN_URL, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      }
    });

    if (!response.ok) {
      throw new Error(`Token request failed: ${response.status}`);
    }

    const data = await response.json();

    if (!data.base_url || !data.jwt) {
      throw new Error('Invalid token response');
    }

    tokenData = {
      baseUrl: data.base_url,
      jwt: data.jwt,
      expiresAt: data.expires_at ? data.expires_at * 1000 : Date.now() + (60 * 60 * 1000)
    };

    tokenExpiry = Date.now() + (50 * 60 * 1000);

    console.log('Token obtained successfully');
    return tokenData;

  } catch (error) {
    console.error('Error getting token:', error);
    tokenData = null;
    tokenExpiry = null;
    return null;
  }
}

function buildStreamUrl(channel, token) {
  if (!token || !token.baseUrl || !token.jwt) {
    return null;
  }

  const channelName = atob(channel.getURL);
  const number = channel.number || 3;

  return `${token.baseUrl}tok_${token.jwt}/live/c${number}eds/${channelName}/SA_Live_dash_enc/${channelName}.mpd`;
}

function buildDrmConfig(channel) {
  return {
    clearkey: {
      keyId: channel.keyId,
      key: channel.key
    }
  };
}

async function playChannel(channel) {
  if (!playerInstance) {
    initPlayer();
  }

  const homeScreen = document.getElementById('homeScreen');
  if (homeScreen) homeScreen.style.display = 'none';

  hideError();

  const token = await getToken();
  if (!token) {
    showError('No se pudo obtener el token de acceso. Intentando reconectar...');
    setTimeout(() => playChannel(channel), 3000);
    return;
  }

  currentChannel = channel;
  const streamUrl = buildStreamUrl(channel, token);

  if (!streamUrl) {
    showError('URL de stream invalida');
    return;
  }

  console.log('Playing:', channel.name, 'URL:', streamUrl.substring(0, 100) + '...');

  try {
    playerInstance.setup({
      playlist: [{
        sources: [{
          default: true,
          type: 'dash',
          file: streamUrl,
          drm: buildDrmConfig(channel)
        }]
      }],
      width: '100%',
      height: '100%',
      autostart: true,
      mute: false,
      volume: 100,
      primary: 'html5'
    });

    playerInstance.on('ready', () => {
      console.log('Player ready');
      retryCount = 0;
      playerInstance.setMute(0);
      playerInstance.setVolume(100);

      const platform = window.navigator.platform;
      if (platform !== 'Win32') {
        playerInstance.setFullscreen(true);
      }
    });

    playerInstance.on('play', () => {
      console.log('Playback started');
      retryCount = 0;
      updateProgramInfo(channel);
    });

    playerInstance.on('firstFrame', () => {
      console.log('First frame rendered');
    });

    playerInstance.on('error', (e) => {
      console.error('Player error:', e);
      handleError(channel);
    });

    playerInstance.on('buffer', () => {
      console.log('Buffering...');
    });

  } catch (error) {
    console.error('Error setting up player:', error);
    showError('Error al reproducir el canal: ' + error.message);
  }
}

function handleError(channel) {
  retryCount++;
  if (retryCount < MAX_RETRIES) {
    console.log(`Retry ${retryCount}/${MAX_RETRIES}`);
    tokenData = null;
    tokenExpiry = null;
    setTimeout(() => playChannel(channel), 2000);
  } else {
    showError('Error al reproducir el canal. Intentando otro método...');
    retryCount = 0;
    setTimeout(() => tryAlternativeMethod(channel), 3000);
  }
}

async function tryAlternativeMethod(channel) {
  const channelName = atob(channel.getURL);
  const number = channel.number || 3;

  const alternativeUrls = [
    `https://chromecast.cvattv.com.ar/live/c${number}eds/${channelName}/SA_Live_dash_enc/${channelName}.m3u8`,
    `https://edge-live15-sl.cvattv.com.ar/live/c${number}eds/${channelName}/SA_Live_dash_enc/${channelName}.mpd`
  ];

  for (const url of alternativeUrls) {
    try {
      console.log('Trying alternative URL:', url.substring(0, 80) + '...');
      const response = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(5000) });
      if (response.ok) {
        console.log('Alternative URL works:', url);
        playerInstance.load({
          sources: [{
            file: url,
            type: url.includes('.m3u8') ? 'hls' : 'dash',
            drm: buildDrmConfig(channel)
          }]
        });
        playerInstance.play();
        return;
      }
    } catch (e) {
      console.log('Alternative URL failed:', url.substring(0, 50));
    }
  }

  showError('No se pudo conectar al canal. Intente mas tarde.');
}

async function refreshStream(channel) {
  tokenData = null;
  tokenExpiry = null;
  playChannel(channel || currentChannel);
}

function showError(message) {
  const errorEl = document.getElementById('appError');
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.style.display = 'block';
  }
}

function hideError() {
  const errorEl = document.getElementById('appError');
  if (errorEl) {
    errorEl.style.display = 'none';
  }
}

async function updateProgramInfo(channel) {
  if (!channel.pid) return;

  const programInfo = document.getElementById('programInfo');
  const programTitle = document.getElementById('programTitle');
  const programDesc = document.getElementById('programDesc');
  const programTime = document.getElementById('programTime');
  const programBanner = document.getElementById('programBanner');
  const channelLogo = document.getElementById('channelLogo');

  try {
    const now = Math.floor(Date.now() / 1000);
    const url = `${CONTENT_API}/29/default/es-AR/schedules?fields=Pid,Title,Description,ChannelName,CallLetter,Start,End,LiveChannelPid,LiveProgramPid,images.videoFrame,AgeRatingPid&starttime=${now}&endtime=${now}&livechannelpids=${channel.pid}`;

    const response = await fetch(url);
    if (!response.ok) return;

    const data = await response.json();
    const program = data.Content?.[0];

    if (program) {
      programTitle.textContent = program.Title || '';
      programDesc.textContent = program.Description || '';
      programTime.textContent = formatTime(program.Start, program.End);

      if (program.Images?.VideoFrame?.[0]?.Url) {
        const imgUrl = `https://spotlight-ar.cdn.telefonica.com/customer/v1/source?image=${encodeURIComponent(program.Images.VideoFrame[0].Url)}?width=400&height=225&resize=CROP&format=WEBP`;
        programBanner.src = imgUrl;
      }

      if (channel.img) {
        channelLogo.src = channel.img;
      }

      programInfo.classList.add('visible');
      setTimeout(() => {
        programInfo.classList.remove('visible');
      }, 8000);
    }
  } catch (error) {
    console.error('Error fetching program info:', error);
  }
}

function formatTime(start, end) {
  const startDate = new Date(start * 1000);
  const endDate = new Date(end * 1000);
  const options = { hour: '2-digit', minute: '2-digit' };
  return `${startDate.toLocaleTimeString('es-AR', options)} - ${endDate.toLocaleTimeString('es-AR', options)}`;
}
