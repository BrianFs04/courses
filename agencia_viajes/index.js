/* const express = require("express"); */
import express from "express"; // Para habilitar la sintaxis imports/exports se debe poner type module en el package.json
import router from "./routes/index.js"; // Se debe colocar la extensión
import db from "./config/db.js";

import dotenv from "dotenv";
dotenv.config({ path: "variables.env" });

const app = express();

// Conectar a la base de datos
db.authenticate()
    .then(() => console.log("Base de datos conectada"))
    .catch((error) => console.error(error));

// Habilitar PUG
app.set("view engine", "pug");

// Obtener el año actual
// next - goes to the next middleware
app.use((req, res, next) => {
    const year = new Date();
    res.locals.currentYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de viajes";
    next(); // return para forzarlo en caso de algún error
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// Definir la carpeta pública
app.use(express.static("public"));

// Agregar router
app.use("/", router);

// Puerto y host para la app
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;
app.listen(port, host, () => {
    console.log("El servidor está funcionando");
});
