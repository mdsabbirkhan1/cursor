// pages.js
import { getToolsByCategory, getMostUsedTools } from './tools/index.js';
import { renderToolCard } from './ui.js';

export function renderHome(app) {
  app.innerHTML = `
    <header class="top-bar">
      <h1>Tools Website</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#tools">Tools</a>
      </nav>
    </header>
    <section class="hero">
      <h2>Discover Useful Tools</h2>
      <p>All your favorite tools in one place. Fast, beautiful, and user-friendly.</p>
      <button id="searchBtn">Search Tools</button>
    </section>
    <section id="categories"></section>
  `;
  // Render categories
  const categories = Object.keys(getToolsByCategory());
  const catEl = document.getElementById('categories');
  catEl.innerHTML = categories.map(cat => `<div class="category">${cat}</div>`).join('');
  document.getElementById('searchBtn').onclick = () => {
    document.dispatchEvent(new CustomEvent('showSearchBar'));
  };
}

export function renderTools(app) {
  const mostUsed = getMostUsedTools();
  const categories = getToolsByCategory();
  app.innerHTML = `
    <header class="top-bar">
      <h1>All Tools</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#tools">Tools</a>
      </nav>
    </header>
    <section id="most-used"></section>
    <section id="tools-list"></section>
  `;
  // Render most used tools
  document.getElementById('most-used').innerHTML = `<h3>Most Used</h3>` + mostUsed.map(renderToolCard).join('');
  // Render all tools by category
  const listEl = document.getElementById('tools-list');
  listEl.innerHTML = Object.entries(categories).map(([cat, tools]) => `
    <div class="category-block">
      <h4>${cat}</h4>
      <div class="tools">${tools.map(renderToolCard).join('')}</div>
    </div>
  `).join('');
}