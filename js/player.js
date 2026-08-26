let currentChannel = null;
let hlsInstance = null;

function playChannel(channel) {
  const homeScreen = document.getElementById('homeScreen');
  if (homeScreen) homeScreen.style.display = 'none';

  hideError();
  currentChannel = channel;

  const streamUrl = channel.url;
  if (!streamUrl) {
    showError('URL de stream invalida');
    return;
  }

  const video = document.getElementById('player');
  if (!video) {
    showError('Elemento video no encontrado');
    return;
  }

  if (hlsInstance) {
    hlsInstance.destroy();
    hlsInstance = null;
  }

  const isHLS = streamUrl.includes('.m3u8') || channel.type === 'HLS';

  console.log('Playing:', channel.name);

  if (isHLS && Hls.isSupported()) {
    hlsInstance = new Hls({
      maxBufferLength: 30,
      maxMaxBufferLength: 60,
      startFragPrefetch: true
    });

    hlsInstance.loadSource(streamUrl);
    hlsInstance.attachMedia(video);

    hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
      console.log('HLS manifest parsed, playing...');
      video.play().catch(e => console.log('Autoplay blocked:', e));
    });

    hlsInstance.on(Hls.Events.ERROR, (event, data) => {
      console.error('HLS error:', data.type, data.details);
      if (data.fatal) {
        showError('Error al reproducir: ' + data.details);
      }
    });

  } else if (isHLS && video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = streamUrl;
    video.addEventListener('loadedmetadata', () => {
      video.play().catch(e => console.log('Autoplay blocked:', e));
    });

  } else {
    video.src = streamUrl;
    video.play().catch(e => console.log('Autoplay blocked:', e));
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

function refreshStream(channel) {
  playChannel(channel || currentChannel);
}
