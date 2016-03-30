const cacheName = 'v1::static';

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll([
          '/examples/example.json',
          '/examples/official.json',
          '/examples/json-ld.json',
          '/package.json',
      ]);
      return cache.addAll([
        '/',
        '/bundle.css',
        '/bundle.js',
        '/fonts/roboto/Roboto-Regular.woff2',
        '/fonts/roboto/Roboto-Bold.woff2',
      ]).then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(res => res || fetch(evt.request))
  );
});
