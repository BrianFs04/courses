// Cachear network
const CACHE_ELEMENTS = [
	'./',
	'https://unpkg.com/react@17/umd/react.production.min.js',
	'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js',
	'https://unpkg.com/@babel/standalone/babel.min.js',
	'./style.css',
	'./components/Contador.js',
	'./index.js',
];

// Nombre del cache
const CACHE_NAME = 'v2_cache_contador_react';

// Instalar el serviceWorker
self.addEventListener('install', (e) => {
	e.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			cache
				.addAll(CACHE_ELEMENTS)
				.then(() => {
					self.skipWaiting();
				})
				.catch(console.log);
		})
	);
});

// Activar el serviceWorker
self.addEventListener('activate', (e) => {
	const cacheWhitelist = [CACHE_NAME];
	e.waitUntil(
		caches
			.keys()
			.then((cacheNames) => {
				return Promise.all(
					cacheNames.map((cacheName) => {
						return (
							cacheWhitelist.indexOf(cacheName) === -1 &&
							caches.delete(cacheName)
						);
					})
				);
			})
			.then(() => self.clients.claim())
	);
});

// Descarga nuevos archivos estaticos
self.addEventListener('fetch', (e) => {
	e.respondWith(
		caches.match(e.request).then((res) => (res ? res : fetch(e.request)))
	);
});
