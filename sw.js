const CACHE_NAME = 'mappa-bianca-maker-v1';

// Risorse statiche da cacheare all'installazione
const urlsToCache = [
  './',                     // la pagina principale
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
  // Se hai altri file statici (CSS, JS esterni) aggiungili qui
];

// Installazione: apre la cache e aggiunge le risorse
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aperta e popolata con le risorse statiche');
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercetta le richieste: risponde prima dalla cache, se non trovato va in rete
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se trovato in cache, lo restituisce
        if (response) {
          return response;
        }
        // Altrimenti effettua la richiesta in rete e la mette in cache (opzionale)
        return fetch(event.request).then(
          response => {
            // Controlla se la risposta è valida e clonabile
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            // Clona la risposta per metterla in cache
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                // Non cacheare richieste di tile OSM (troppe) o API esterne
                // Qui puoi aggiungere filtri per escludere determinati URL
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
      })
  );
});

// Opzionale: attiva il nuovo service worker e rimuove cache vecchie
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Cache obsoleta rimossa:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});