// Leer un archivo json desde el servidor
import http from 'http';
import data from './datos.json';

http.createServer((req, res) => {
	if (req.url === '/') {
		res.writeHead(200, { 'Content-type': 'text/json' });
		res.end(JSON.stringify(data));
	} else if (req.url === '/honor') {
		filtarHonor(res);
	} else if (req.url === '/deshonor') {
		filtarDeshonor(res);
	} else {
		res.writeHead(404, { 'Content-type': 'text/plain' });
		res.end('404 Página no existe');
	}
}).listen(3000);
console.log('Servidor puerto 3000');

function filtarHonor(res) {
	let honor = data.filter((alumno) => {
		return alumno.cali >= 9;
	});

	res.end(JSON.stringify(honor));
}

function filtarDeshonor(res) {
	let deshonor = data.filter((alumno) => {
		return alumno.cali <= 7;
	});
	res.end(JSON.stringify(deshonor));
}
