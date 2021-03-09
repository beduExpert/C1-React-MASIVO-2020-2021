self.skipWaiting();

workbox.routing.registerRoute(
  new RegExp('https:.*min.(css|js)'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'cdn-cache'
  })
);

workbox.routing.registerRoute(
  new RegExp('.*.json'),
  new workbox.strategies.NetworkFirst()
);

self.addEventListener('fetch', (event) => {
  if (event.request.method === 'POST' || event.request.method === 'DELETE') {
    event.respondWith(
      fetch(event.request).catch((err) => {
        return new Response(
          JSON.stringify({ error: 'This action disabled while app is offline' }),
          {
            headers: { 'Content-Type': 'application/json' }
          }
        );
      })
    );
  }
});

self.addEventListener('push', (event) => {
  event.waitUntil(
    self.registration.showNotification('Mi PWA', {
      icon: '/logo192.png',
      body: event.data.text()
    })
  );
});

// Comentar para prevenir que la PWA guarde cache
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
