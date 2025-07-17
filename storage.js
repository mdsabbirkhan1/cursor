// storage.js
const USER_KEY = 'toolsUserData';

export function getUserData() {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY)) || { usage: {} };
  } catch {
    return { usage: {} };
  }
}

export function saveUserData(data) {
  localStorage.setItem(USER_KEY, JSON.stringify(data));
}

export function trackToolUsage(toolId) {
  const data = getUserData();
  data.usage[toolId] = (data.usage[toolId] || 0) + 1;
  saveUserData(data);
}

export function getMostUsedToolIds(limit = 5) {
  const usage = getUserData().usage;
  return Object.entries(usage)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([id]) => id);
}