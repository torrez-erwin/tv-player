let playerInstance = null;
let currentChannel = null;
let hlsInstance = null;

function initPlayer() {
  jwplayer.key = 'XSuP4qMl+9tK17QNb+4+th2Pm9AWgMO/cYH8CI0HGGr7bdjo';
  playerInstance = jwplayer('player');
}

function playChannel(channel) {
  if (!playerInstance) {
    initPlayer();
  }

  const homeScreen = document.getElementById('homeScreen');
  if (homeScreen) homeScreen.style.display = 'none';

  hideError();
  currentChannel = channel;

  const streamUrl = channel.url;
  if (!streamUrl) {
    showError('URL de stream invalida');
    return;
  }

  console.log('Playing:', channel.name, 'URL:', streamUrl.substring(0, 80) + '...');

  if (hlsInstance) {
    hlsInstance.destroy();
    hlsInstance = null;
  }

  const isHLS = streamUrl.includes('.m3u8') || channel.type === 'HLS';

  try {
    playerInstance.setup({
      playlist: [{
        sources: [{
          default: true,
          type: isHLS ? 'hls' : 'dash',
          file: streamUrl
        }]
      }],
      width: '100%',
      height: '100%',
      autostart: true,
      mute: false,
      volume: 100,
      primary: 'html5',
      hlshtml: true
    });

    playerInstance.on('ready', () => {
      console.log('Player ready');
      playerInstance.setMute(0);
      playerInstance.setVolume(100);

      const platform = window.navigator.platform;
      if (platform !== 'Win32') {
        playerInstance.setFullscreen(true);
      }
    });

    playerInstance.on('play', () => {
      console.log('Playback started');
    });

    playerInstance.on('firstFrame', () => {
      console.log('First frame rendered');
    });

    playerInstance.on('error', (e) => {
      console.error('Player error:', e);
      showError('Error al reproducir el canal. Intenta otro canal.');
    });

    playerInstance.on('buffer', () => {
      console.log('Buffering...');
    });

  } catch (error) {
    console.error('Error setting up player:', error);
    showError('Error al reproducir el canal: ' + error.message);
  }
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

async function refreshStream(channel) {
  playChannel(channel || currentChannel);
}
