import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import pug from "pug";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(`${__dirname}/public`));

const perros = [
	{ raza: "Doberman", texto: "Perro de ataque", imagen: "doberman.jpg" },
	{ raza: "Pug", texto: "Perro de compañía", imagen: "pug.jpg " },
	{
		raza: "San Bernanrdo",
		text: "Perro de rescate",
		imagen: "sanbernardo.jpg",
	},
];
app.get("/", (req, res) => {
	res.render("index.pug", {
		titulo: "Perros",
		texto: "Selecciona una raza",
		imagen: "perro.jpg",
		perros: perros,
	});
});

app.get("/perro/:raza", (req, res) => {
	let datosPerro = perros.filter((perro) => {
		if (req.params.raza === perro.raza) {
			return perro;
		}
	})[0];
	res.render("perro.pug", {
		raza: req.params.raza,
		data: datosPerro,
	});
});

// Página no encontrada
app.use((req, res) => {
	res.status(400);

	let error = req.originalUrl;

	res.render("404.pug", { texto: error });
});

app.listen(3000, (err) => {
	if (err) throw err;
	console.log("Servidor en el puerto 3000");
});
