import express from "express";
import mongoose from "mongoose";
import router from "./routes/index.js";
import cors from "cors";

// Crear el servidor
const app = express();

// Habilitar CORS
const whitelist = ["http://localhost:3000"];
const corsOptions = {
    origin: (origin, callback) => {
        const existe = whitelist.some((dominio) => dominio === origin);
        if (existe) {
            callback(null, true);
        } else {
            callback(new Error("No permitido por CORS"));
        }
    },
};
// app.use(cors(corsOptions));
app.use(cors());

// Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/veterinaria", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

// Agregar body parser para leer los datos del formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Habilitar routing
app.use("/", router);

// Puerto y arrancar el servidor
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
});
