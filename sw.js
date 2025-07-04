const CACHE_NAME = 'btc-signal-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=023'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
