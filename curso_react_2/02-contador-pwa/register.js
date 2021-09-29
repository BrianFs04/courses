if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js');
} else {
	console.log('serviceWorker no existe en el navegador');
}
