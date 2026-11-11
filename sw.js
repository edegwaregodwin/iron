/* Logged — service worker.
   App shell (the page and the plan data) is network-first, so an update lands as
   soon as you open the app with signal. Everything else is cache-first.
   Offline still works: a failed fetch falls back to the cache. */
const VERSION = 'logged-v24';
const SHELL = [
  './',
  './index.html',
  './app-data.js',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png'
];
/* Files that must never go stale. */
const FRESH = ['index.html', 'app-data.js'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(VERSION)
      .then(cache => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data === 'skip-waiting') self.skipWaiting();
});

function putInCache(key, res) {
  const copy = res.clone();
  caches.open(VERSION).then(cache => cache.put(key, copy)).catch(() => {});
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  let url;
  try { url = new URL(req.url); } catch (e) { return; }

  const isNav = req.mode === 'navigate';
  const isFresh = isNav || FRESH.some(n => url.pathname.endsWith('/' + n));

  if (isFresh) {
    // Network first. The cache key for a navigation is the page itself.
    const key = isNav ? './index.html' : req;
    // cache: 'reload' bypasses the browser's own HTTP cache, which GitHub Pages
    // sets to max-age=600 — without it an update can sit unseen for ten minutes.
    event.respondWith(
      fetch(req.url, { cache: 'reload', credentials: 'same-origin' })
        .then(res => {
          if (res && res.status === 200) putInCache(key, res);
          return res;
        })
        .catch(() => caches.match(key).then(hit => hit || caches.match('./index.html')))
    );
    return;
  }

  // Everything else: cache first, then network.
  event.respondWith(
    caches.match(req).then(hit => {
      if (hit) return hit;
      return fetch(req).then(res => {
        if (res && (res.status === 200 || res.type === 'opaque')) putInCache(req, res);
        return res;
      }).catch(() => hit);
    })
  );
});
