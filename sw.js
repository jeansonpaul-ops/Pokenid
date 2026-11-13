// PokéNid : service worker minimal pour l'installation sur l'écran d'accueil.
// Il ne met rien en cache : le jeu est toujours chargé depuis le réseau, donc jamais d'ancienne version bloquée.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
