// Service Worker for ModernWebDev PWA

let filesToCache = [
    '/', 
    '/index.html', 
    '/css/styles.css', 
    '/js/pwascripts.js', 
    '/images/modernweb.jpg'

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

self.addEventListener('fetch', function(e) {
    console.log("fetch called");

    e.respondWith(
        caches.match(e.request)
            .then(function(response){
                if (response) {
                    console.log("resource retrieved from cache");
                } else {
                    console.log("resource not in the cache");
                }

                return response || fetch(e.request);
            })
    );
});


