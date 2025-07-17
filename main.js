// main.js
import { renderHome, renderTools } from './pages.js';
import { showPwaPopup, showCookiePopup, setupTheme, setupSearchBar, setupBannerAd } from './ui.js';
import { getUserData, saveUserData } from './storage.js';

const app = document.getElementById('app');

function route() {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'tools') {
    renderTools(app);
  } else {
    renderHome(app);
  }
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', () => {
  setupTheme();
  setupBannerAd();
  showPwaPopup();
  showCookiePopup();
  setupSearchBar();
  route();
});