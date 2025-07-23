// Simple Service Worker for Mentes Brillantes PWA
const CACHE_NAME = 'mentes-brillantes-v1';

// Install event
self.addEventListener('install', event => {
    console.log('Service Worker installing...');
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', event => {
    console.log('Service Worker activating...');
    event.waitUntil(self.clients.claim());
});

// Fetch event - basic caching
self.addEventListener('fetch', event => {
    if (event.request.method === 'GET') {
        event.respondWith(
            caches.match(event.request)
                .then(response => response || fetch(event.request))
                .catch(() => fetch(event.request))
        );
    }
});

console.log('Service Worker loaded');