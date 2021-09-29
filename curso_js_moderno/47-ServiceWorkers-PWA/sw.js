const nameCache = "apv-v8";
const files = [
    "/47-ServiceWorkers-PWA/",
    "/47-ServiceWorkers-PWA/index.html",
    "/47-ServiceWorkers-PWA/error.html",
    "/47-ServiceWorkers-PWA/css/bootstrap.css",
    "/47-ServiceWorkers-PWA/css/styles.css",
    "/47-ServiceWorkers-PWA/js/app.js",
    "/47-ServiceWorkers-PWA/js/apv.js",
];

// When service worked is installed
self.addEventListener("install", (e) => {
    console.log("Service worker installed"); // It is executed just once

    e.waitUntil(
        caches.open(nameCache).then((cache) => {
            console.log("Catching");
            cache.addAll(files);
        })
    );
});

// Activate the service worker
self.addEventListener("activate", (e) => {
    console.log("Service worker activated");

    e.waitUntil(
        caches.keys().then((keys) => {
            //console.log(keys);
            return Promise.all(
                keys
                    .filter((key) => key !== nameCache)
                    .map((key) => caches.delete(key)) // Delete the previous versions
            );
        })
    );
});

// fetch event to download static files
self.addEventListener("fetch", (e) => {
    console.log("Fetch...", e);

    e.respondWith(
        caches
            .match(e.request)
            .then((cacheResponse) =>
                cacheResponse
                    ? cacheResponse
                    : caches.match("/47-ServiceWorkers-PWA/error.html")
            )
    );
});
