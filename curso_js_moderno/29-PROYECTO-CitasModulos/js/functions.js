import Dates from "./classes/Dates.js";
import UI from "./classes/UI.js";
import {
    petInput,
    ownerInput,
    phoneInput,
    dateInput,
    hourInput,
    symptomsInput,
    form,
} from "./selectors.js";

let editing;

const ui = new UI();
const manageDates = new Dates();

// Object with the date information
const dateObj = {
    mascota: "",
    propietario: "",
    telefono: "",
    fecha: "",
    hora: "",
    sintomas: "",
};

// Add data to "dateObj"
export function dateData(e) {
    dateObj[e.target.name] = e.target.value; // This could work if we have the att "name" in the HTML
}

// Checks and adds a new date to the class "Dates"
export function newDate(e) {
    e.preventDefault();

    // Extract information of date object
    const { mascota, propietario, telefono, fecha, hora, sintomas } = dateObj;

    // Validate
    if (
        mascota === "" ||
        propietario === "" ||
        telefono === "" ||
        fecha === "" ||
        hora === "" ||
        sintomas === ""
    ) {
        ui.printAlert("All fields are required", "error");
        return;
    }

    if (editing) {
        ui.printAlert("Editing...");

        // Pass the object to edtiion
        manageDates.editDate({ ...dateObj });

        // Going back to the original text in the button
        form.querySelector("button[type='submit']").textContent = "Crear Cita";

        // Quit from edition mode
        editing = false;
    } else {
        // Generate an unique ID
        dateObj.id = Date.now();

        // Create a new date
        manageDates.addDate({ ...dateObj }); // Here we "create" a copy in order to avoid repetition

        // Message "added correctly"
        ui.printAlert("Date added correctly");
    }

    // Reload the object for validation
    reloadObject();

    // Reset the form
    form.reset();

    // Show th HTML of dates
    ui.printDates(manageDates);
}

export function reloadObject() {
    dateObj.mascota = "";
    dateObj.propietario = "";
    dateObj.telefono = "";
    dateObj.fecha = "";
    dateObj.hora = "";
    dateObj.sintomas = "";
}

export function deleteDate(id) {
    // Delete date
    manageDates.deleteDate(id);

    // Show message
    ui.printAlert("Date was deleted properly");

    // Reload dates
    ui.printDates(manageDates);
}

// Load dates and edition mode
export function loadEdition(date) {
    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = date;

    // Fill the inputs
    petInput.value = mascota;
    ownerInput.value = propietario;
    phoneInput.value = telefono;
    dateInput.value = fecha;
    hourInput.value = hora;
    symptomsInput.value = sintomas;

    // Fill the object
    dateObj.mascota = mascota;
    dateObj.propietario = propietario;
    dateObj.telefono = telefono;
    dateObj.fecha = fecha;
    dateObj.hora = hora;
    dateObj.sintomas = sintomas;
    dateObj.id = id;

    // Change text of button
    form.querySelector("button[type='submit']").textContent = "Save changes";

    editing = true;
}
