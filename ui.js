// ui.js
export function renderToolCard(tool) {
  return `<div class="tool-card" data-id="${tool.id}">
    <img src="${tool.icon}" alt="${tool.name}" loading="lazy" />
    <div class="tool-info">
      <h5>${tool.name}</h5>
      <p>${tool.description}</p>
      <span class="badge">${tool.badge || ''}</span>
      <span class="rating">${'★'.repeat(tool.rating || 0)}</span>
      <a href="${tool.link}" target="_blank">Visit</a>
    </div>
  </div>`;
}

export function showPwaPopup() {
  // Minimal PWA install prompt
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const popup = document.createElement('div');
    popup.className = 'pwa-popup';
    popup.innerHTML = '<p>Install this app?</p><button id="pwaInstall">Install</button>';
    document.body.appendChild(popup);
    document.getElementById('pwaInstall').onclick = () => {
      deferredPrompt.prompt();
      popup.remove();
    };
  });
}

export function showCookiePopup() {
  if (localStorage.getItem('cookieConsent')) return;
  const popup = document.createElement('div');
  popup.className = 'cookie-popup';
  popup.innerHTML = '<p>This site uses cookies. <button id="cookieAccept">Accept</button></p>';
  document.body.appendChild(popup);
  document.getElementById('cookieAccept').onclick = () => {
    localStorage.setItem('cookieConsent', '1');
    popup.remove();
  };
}

export function setupTheme() {
  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (dark) document.body.classList.add('dark');
  const toggle = document.createElement('button');
  toggle.className = 'theme-toggle';
  toggle.textContent = '🌙';
  toggle.onclick = () => {
    document.body.classList.toggle('dark');
  };
  document.body.appendChild(toggle);
}

export function setupSearchBar() {
  document.addEventListener('showSearchBar', () => {
    const popup = document.createElement('div');
    popup.className = 'search-popup';
    popup.innerHTML = '<input type="text" placeholder="Search tools..." autofocus />';
    document.body.appendChild(popup);
    popup.querySelector('input').focus();
    popup.onclick = (e) => { if (e.target === popup) popup.remove(); };
    popup.querySelector('input').onblur = () => popup.remove();
  });
}

export function setupBannerAd() {
  const banner = document.createElement('div');
  banner.className = 'banner-ad';
  banner.innerHTML = '<iframe src="https://adsterra.com/banner" style="width:100%;height:60px;border:0;"></iframe>';
  document.body.prepend(banner);
}