// Service Worker for ModernWebDev PWA

let filesToCache = [
    '/', 
    '/index.html', 
    '/css/styles.css', 
    '/js/pwascripts.js'
];

let cacheId = "modernwebpwa";

self.addEventListener('install', function(e) {
    console.log("install triggered");

    e.waitUntil(
        caches.open(cacheId)
            .then(function(cache) {
                return cache.addAll(filesToCache);
            })
    );
});

/*
self.addEventListener('fetch', function(e) {
    console.log("fetch called");
});
*/

