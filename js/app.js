let activeChannelIndex = -1;
let currentCategory = 'Todos';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  renderChannelList();
  setupEventListeners();
});

function renderChannelList() {
  const container = document.getElementById('channelList');
  if (!container) return;

  const filteredChannels = CHANNELS.filter(ch => {
    const matchesCategory = currentCategory === 'Todos' || ch.category === currentCategory;
    const matchesSearch = !searchQuery ||
      ch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryGroups = {};
  filteredChannels.forEach(ch => {
    if (!categoryGroups[ch.category]) {
      categoryGroups[ch.category] = [];
    }
    categoryGroups[ch.category].push(ch);
  });

  let html = '';

  html += '<div class="search-container">';
  html += '<input type="text" class="search-input" placeholder="Buscar canal..." id="searchInput" value="' + searchQuery + '">';
  html += '</div>';

  html += '<div class="category-filters">';
  CATEGORIES.forEach(cat => {
    const activeClass = currentCategory === cat ? ' active' : '';
    html += `<button class="filter-btn${activeClass}" data-category="${cat}">${cat}</button>`;
  });
  html += '</div>';

  Object.keys(categoryGroups).sort().forEach(category => {
    const channels = categoryGroups[category];
    html += `<div class="category-header">${category} (${channels.length})</div>`;

    channels.forEach(ch => {
      const globalIndex = CHANNELS.indexOf(ch);
      const activeClass = globalIndex === activeChannelIndex ? ' active' : '';
      html += `
        <button class="channel-btn${activeClass}" data-index="${globalIndex}" tabindex="0">
          <span class="channel-name">${ch.name}</span>
          <span class="channel-number">${ch.number || ''}</span>
        </button>
      `;
    });
  });

  container.innerHTML = html;

  container.querySelectorAll('.channel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.dataset.index);
      selectChannel(index);
    });
  });

  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.category;
      renderChannelList();
    });
  });

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderChannelList();
      const newInput = document.getElementById('searchInput');
      if (newInput) {
        newInput.focus();
        newInput.selectionStart = newInput.selectionEnd = newInput.value.length;
      }
    });
  }
}

function selectChannel(index) {
  if (index < 0 || index >= CHANNELS.length) return;

  activeChannelIndex = index;
  const channel = CHANNELS[index];

  document.querySelectorAll('.channel-btn').forEach(btn => {
    btn.classList.remove('active');
    if (parseInt(btn.dataset.index) === index) {
      btn.classList.add('active');
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });

  playChannel(channel);

  if (window.innerWidth <= 768) {
    document.getElementById('channelList').classList.remove('open');
  }
}

function setupEventListeners() {
  const menuToggle = document.getElementById('menuToggle');
  const channelList = document.getElementById('channelList');

  if (menuToggle && channelList) {
    menuToggle.addEventListener('click', () => {
      channelList.classList.toggle('open');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;

    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        if (activeChannelIndex > 0) {
          selectChannel(activeChannelIndex - 1);
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (activeChannelIndex < CHANNELS.length - 1) {
          selectChannel(activeChannelIndex + 1);
        }
        break;
      case 'Escape':
        if (channelList) channelList.classList.remove('open');
        break;
    }

    if (e.keyCode >= 48 && e.keyCode <= 57) {
      handleNumberInput(e.key);
    }
  });

  let numberBuffer = '';
  let numberTimeout;

  function handleNumberInput(digit) {
    numberBuffer += digit;
    clearTimeout(numberTimeout);

    const channelNumber = document.getElementById('channelNumber');
    const span = channelNumber.querySelector('span');
    span.textContent = numberBuffer;
    channelNumber.classList.add('visible');

    numberTimeout = setTimeout(() => {
      const num = parseInt(numberBuffer);
      const index = CHANNELS.findIndex(ch => ch.number === num);
      if (index !== -1) {
        selectChannel(index);
      }
      numberBuffer = '';
      channelNumber.classList.remove('visible');
    }, 2000);
  }

  let touchStartX = 0;
  document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });

  document.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 100) {
      if (diff > 0 && activeChannelIndex < CHANNELS.length - 1) {
        selectChannel(activeChannelIndex + 1);
      } else if (diff < 0 && activeChannelIndex > 0) {
        selectChannel(activeChannelIndex - 1);
      }
    }
  });
}
