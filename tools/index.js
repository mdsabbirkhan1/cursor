// tools/index.js
import * as dev from './dev.js';
import * as design from './design.js';
import { getMostUsedToolIds } from '../storage.js';

const categories = {
  Development: dev.tools,
  Design: design.tools,
};

export function getToolsByCategory() {
  return categories;
}

export function getMostUsedTools() {
  const ids = getMostUsedToolIds();
  const all = Object.values(categories).flat();
  return ids.map(id => all.find(t => t.id === id)).filter(Boolean);
}