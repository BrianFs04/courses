import express from "express";
import {
    nuevoCliente,
    obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPaciente,
} from "../controllers/pacienteControllers.js";

const router = express.Router();

// Agrega nuevos pacientes via POST
router.post("/pacientes", nuevoCliente);

// Obtiene todos los registros de pacientes en la BD
router.get("/pacientes", obtenerPacientes);

// Obtiene un paciente en especifico (ID)
router.get("/pacientes/:id", obtenerPaciente);

// Actualizar un registro con un ID especifico
router.put("/pacientes/:id", actualizarPaciente);

// Elimina un paciente por su ID
router.delete("/pacientes/:id", eliminarPaciente);

export default router;
