const BASE_URL = 'https://chromecast.cvattv.com.ar';
const CONTENT_API = 'https://contentapi-ar.cdn.telefonica.com';

let playerInstance = null;
let currentToken = null;
let currentChannel = null;
let tokenExpiry = null;

function initPlayer() {
  jwplayer.key = 'XSuP4qMl+9tK17QNb+4+th2Pm9AWgMO/cYH8CI0HGGr7bdjo';
  playerInstance = jwplayer('player');
}

async function getToken() {
  if (currentToken && tokenExpiry && Date.now() < tokenExpiry) {
    return currentToken;
  }

  try {
    const testUrl = `${BASE_URL}/live/c7eds/La_Nacion/SA_Live_dash_enc/La_Nacion.m3u8`;
    const response = await fetch(testUrl, {
      signal: AbortSignal.timeout(8000),
      redirect: 'follow'
    });

    if (response.redirected) {
      const regex = /(https:\/\/.+?)(?=\/live)/;
      const match = response.url.match(regex);
      if (match) {
        currentToken = match[0];
        tokenExpiry = Date.now() + (30 * 60 * 1000);
        return currentToken;
      }
    }
  } catch (error) {
    console.error('Error getting token:', error);
  }

  return currentToken;
}

function buildStreamUrl(channel, token) {
  if (!token) return null;

  const channelName = atob(channel.getURL);
  const number = channel.number || 3;

  return `${token}/live/c${number}eds/${channelName}/SA_Live_dash_enc/${channelName}.mpd`;
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

  const token = await getToken();
  if (!token) {
    showError('No se pudo obtener el token de acceso');
    return;
  }

  currentChannel = channel;
  const streamUrl = buildStreamUrl(channel, token);

  if (!streamUrl) {
    showError('URL de stream invalida');
    return;
  }

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
      volume: 100
    });

    playerInstance.on('ready', () => {
      playerInstance.setMute(0);
      playerInstance.setVolume(100);

      const platform = window.navigator.platform;
      if (platform !== 'Win32') {
        playerInstance.setFullscreen(true);
      }
    });

    playerInstance.on('firstFrame', () => {
      updateProgramInfo(channel);
    });

    playerInstance.on('error', (e) => {
      console.error('Player error:', e);
      setTimeout(() => refreshStream(channel), 3000);
    });

  } catch (error) {
    console.error('Error setting up player:', error);
    showError('Error al reproducir el canal');
  }
}

async function refreshStream(channel) {
  currentToken = null;
  tokenExpiry = null;
  playChannel(channel || currentChannel);
}

function showError(message) {
  const errorEl = document.getElementById('appError');
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.style.display = 'block';
    setTimeout(() => {
      errorEl.style.display = 'none';
    }, 5000);
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
