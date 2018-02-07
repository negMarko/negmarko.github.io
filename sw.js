 // Add the addAll method
  importScripts('sw-cache-addall.js');
 
  // A list of paths to cache
  var paths = [
    '/',
    '/css/main.css',
    '/js/main.js',
    'index.htm'
  ];
 
  // Open the cache (and name it)
  caches.open('offline-v1').then(function(cache) {
    return cache.addAll(paths);
  })

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

navigator.serviceWorker.controller.postMessage({'command': 'say-hello!'})
