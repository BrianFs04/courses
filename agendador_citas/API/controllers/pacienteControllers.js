import Paciente from '../models/Paciente.js';

// Cuando se crea un nuevo cliente
const nuevoCliente = async (req, res, next) => {
	// Crear objeto de paciente con datos de req.body
	const paciente = new Paciente(req.body);
	try {
		await paciente.save(); // Método de moongose para guardar en la db
		res.json({ mensaje: 'El cliente se agregó correctamente ' });
	} catch (error) {
		console.log(error);
		next();
	}
};

// Obtiene todos los pacientes
const obtenerPacientes = async (req, res, next) => {
	try {
		const pacientes = await Paciente.find({});
		res.json(pacientes);
	} catch (error) {
		console.log(error);
		next();
	}
};

// Obtiene un paciente por su ID
const obtenerPaciente = async (req, res, next) => {
	try {
		const paciente = await Paciente.findById(req.params.id);
		res.json(paciente);
	} catch (error) {
		console.log(error);
		next();
	}
};

// Actualiza un registro por su ID
const actualizarPaciente = async (req, res, next) => {
	try {
		const paciente = await Paciente.findOneAndUpdate(
			{
				_id: req.params.id,
			},
			req.body,
			{ new: true } // Trae el nuevo resultado
		);
		res.json(paciente);
	} catch (error) {
		console.log(error);
		next();
	}
};

// Elimina un paciente por su ID
const eliminarPaciente = async (req, res, next) => {
	try {
		await Paciente.findOneAndDelete({ _id: req.params.id });
		res.json({ mensaje: 'El paciente fue eliminado' });
	} catch (error) {
		console.log(error);
		next();
	}
};

export {
	nuevoCliente,
	obtenerPacientes,
	obtenerPaciente,
	actualizarPaciente,
	eliminarPaciente,
};
