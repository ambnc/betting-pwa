const CACHE_NAME = "bet-guide-pwa-v3000";

const STATIC_FILES = [
  "./",
  "./index.html",
  "./style.css?v=3000",
  "./app.js?v=3000",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.all(
        STATIC_FILES.map(file => {
          return cache.add(file).catch(error => {
            console.log("Cache failed:", file, error);
          });
        })
      );
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => {
        return Promise.all(
          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") {
    return;
  }

  const url = new URL(event.request.url);

  if (url.pathname.includes("favicon.ico")) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        const responseClone = response.clone();

        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });

        return response;
      })
      .catch(() => {
        return caches.match(event.request).then(cachedResponse => {
          return cachedResponse || caches.match("./index.html");
        });
      })
  );
});
