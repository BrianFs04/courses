import Citas from "../js/classes/Citas";

describe("Probar la clase de citas", () => {
    const citas = new Citas();
    const id = Date.now();
    test("Agregar una nueva cita", () => {
        const citaObj = {
            id,
            mascota: "Hoop",
            propietario: "Brian",
            telefono: "123123123",
            fecha: "10-12-2020",
            hora: "10:30",
            sintomas: "Solo duerme",
        };

        citas.agregarCita(citaObj);

        // Prueba
        expect(citas).toMatchSnapshot();
    });

    test("Actualizar cita", () => {
        const citaActualizada = {
            id,
            mascota: "New Name",
            propietario: "Brian",
            telefono: "123123123",
            fecha: "10-12-2020",
            hora: "10:30",
            sintomas: "Solo duerme",
        };

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });

    test("Eliminar cita", () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    });
});
