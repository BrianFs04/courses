// Form spaces
const petInput = document.querySelector("#mascota");
const ownerInput = document.querySelector("#propietario");
const phoneInput = document.querySelector("#telefono");
const dateInput = document.querySelector("#fecha");
const hourInput = document.querySelector("#hora");
const symptomsInput = document.querySelector("#sintomas");

// UI
const form = document.querySelector("#nueva-cita");
const datesContainer = document.querySelector("#citas");

let editing;

window.onload = () => {
    eventListeners();
    createDB();
};

// Registrate events

function eventListeners() {
    petInput.addEventListener("change", dateData);
    ownerInput.addEventListener("change", dateData);
    phoneInput.addEventListener("change", dateData);
    dateInput.addEventListener("change", dateData);
    hourInput.addEventListener("change", dateData);
    symptomsInput.addEventListener("change", dateData);

    form.addEventListener("submit", newDate);
}

// Object with the date information
const dateObj = {
    mascota: "",
    propietario: "",
    telefono: "",
    fecha: "",
    hora: "",
    sintomas: "",
};

// Classes
class Dates {
    constructor() {
        this.dates = [];
    }

    addDate(date) {
        this.dates = [...this.dates, date];
    }

    deleteDate(id) {
        this.dates = this.dates.filter((date) => date.id !== id);
    }

    editDate(updateDate) {
        this.dates = this.dates.map((date) =>
            date.id === updateDate.id ? updateDate : date
        );
    }
}

class UI {
    printAlert(message, type) {
        // Create the div
        const divMessage = document.createElement("div");
        divMessage.classList.add("text-center", "alert", "d-block", "col-12");

        // Add class in base to the type error
        if (type === "error") {
            divMessage.classList.add("alert-danger");
        } else {
            divMessage.classList.add("alert-success");
        }

        // Error message
        divMessage.textContent = message;

        // Add it to the DOM
        document
            .querySelector("#contenido")
            .insertBefore(divMessage, document.querySelector(".agregar-cita"));

        // Delete the alert after 3 seconds
        setTimeout(() => {
            divMessage.remove();
        }, 3000);
    }

    printDates() {
        this.cleanHTML();
        // Read content from the database
        const objectStore = DB.transaction("dates").objectStore("dates");

        objectStore.openCursor().onsuccess = function (e) {
            const cursor = e.target.result;

            if (cursor) {
                const {
                    mascota,
                    propietario,
                    telefono,
                    fecha,
                    hora,
                    sintomas,
                    id,
                } = cursor.value;

                const divDate = document.createElement("div");
                divDate.classList.add("cita", "p-3");
                divDate.dataset.id = id;

                // Scripting of date elements
                const petParagraph = document.createElement("h2");
                petParagraph.classList.add("card-title", "font-weight-bolder");
                petParagraph.textContent = mascota;

                const ownerParagraph = document.createElement("p");
                ownerParagraph.innerHTML = `
                    <span class="font-weight-bolder"> Owner: </span> ${propietario}
                `;

                const phoneParagraph = document.createElement("p");
                phoneParagraph.innerHTML = `
                    <span class="font-weight-bolder"> Phone: </span> ${telefono}
                `;

                const dateParagraph = document.createElement("p");
                dateParagraph.innerHTML = `
                    <span class="font-weight-bolder"> Date: </span> ${fecha}
                `;

                const hourParagraph = document.createElement("p");
                hourParagraph.innerHTML = `
                    <span class="font-weight-bolder"> Hour: </span> ${hora}
                `;

                const symptomsParagraph = document.createElement("p");
                symptomsParagraph.innerHTML = `
                    <span class="font-weight-bolder"> Symtomps: </span> ${sintomas}
                `;

                // Delete date button
                const btnDelete = document.createElement("button");
                btnDelete.classList.add("btn", "btn-danger", "mr-2");
                btnDelete.innerHTML = `Delete <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>`;
                btnDelete.onclick = () => deleteDate(id);

                // Modify date button
                const btnEdit = document.createElement("button");
                btnEdit.classList.add("btn", "btn-info");
                btnEdit.innerHTML = `Edit <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>`;
                const cita = cursor.value;
                btnEdit.onclick = () => loadEdition(cita);

                // Add paragraphs to divDate
                divDate.appendChild(petParagraph);
                divDate.appendChild(ownerParagraph);
                divDate.appendChild(phoneParagraph);
                divDate.appendChild(dateParagraph);
                divDate.appendChild(hourParagraph);
                divDate.appendChild(symptomsParagraph);
                divDate.appendChild(btnDelete);
                divDate.appendChild(btnEdit);

                // Add dates to the HTML
                datesContainer.appendChild(divDate);

                // Go to the next element
                cursor.continue();
            }
        };
    }

    cleanHTML() {
        while (datesContainer.firstChild) {
            datesContainer.removeChild(datesContainer.firstChild);
        }
    }
}

const ui = new UI();
const manageDates = new Dates();

// Add data to "dateObj"
function dateData(e) {
    dateObj[e.target.name] = e.target.value; // This could work if we have the att "name" in the HTML
}

// Checks and adds a new date to the class "Dates"
function newDate(e) {
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
        // Pass the object to edtiion
        manageDates.editDate({ ...dateObj });

        // Edit in indexDB
        const transaction = DB.transaction(["dates"], "readwrite");
        const objectStore = transaction.objectStore("dates");

        objectStore.put(dateObj);

        transaction.oncomplete = () => {
            ui.printAlert("Edited correctly");
            // Going back to the original text in the button
            form.querySelector("button[type='submit']").textContent =
                "Crear Cita";

            // Quit from edition mode
            editing = false;
        };

        transaction.onerror = () => {
            console.log("There was an error");
        };
    } else {
        // Generate an unique ID
        dateObj.id = Date.now();

        // Create a new date
        manageDates.addDate({ ...dateObj }); // Here we "create" a copy in order to avoid repetition

        // Insert register in DB
        const transaction = DB.transaction(["dates"], "readwrite");

        const objectStore = transaction.objectStore("dates");

        // Insert in DB
        objectStore.add(dateObj);

        transaction.oncomplete = function () {
            console.log("Date added");
            // Message "added correctly"
            ui.printAlert("Date added correctly");
        };
    }

    // Reload the object for validation
    reloadObject();

    // Reset the form
    form.reset();

    // Show th HTML of dates
    ui.printDates();
}

function reloadObject() {
    dateObj.mascota = "";
    dateObj.propietario = "";
    dateObj.telefono = "";
    dateObj.fecha = "";
    dateObj.hora = "";
    dateObj.sintomas = "";
}

function deleteDate(id) {
    const transaction = DB.transaction(["dates"], "readwrite");
    const objectStore = transaction.objectStore("dates");

    objectStore.delete(id);

    transaction.oncomplete = () => {
        // Show message
        ui.printAlert("Date was deleted properly");

        // Reload dates
        ui.printDates();
    };

    transaction.onerror = () => {
        console.log("There was an error");
    };
}

// Load dates and edition mode
function loadEdition(date) {
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

function createDB() {
    // Create DB in version 1.0
    const createDB = window.indexedDB.open("dates", 1);

    // If there is an error
    createDB.onerror = function () {
        console.log("There was an error");
    };

    // If the DB was created
    createDB.onsuccess = function () {
        console.log("DB created");
        DB = createDB.result;

        // Show dates to load (But indexDb is ready)
        ui.printDates();
    };

    // Define the schema
    createDB.onupgradeneeded = function (e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore("dates", {
            keyPath: "id",
            autoIncrement: true,
        });

        // Define all columns
        objectStore.createIndex("mascota", "mascota", { unique: false });
        objectStore.createIndex("propietario", "propietario", {
            unique: false,
        });
        objectStore.createIndex("telefono", "telefono", { unique: false });
        objectStore.createIndex("fecha", "fecha", { unique: false });
        objectStore.createIndex("hora", "hora", { unique: false });
        objectStore.createIndex("sintomas", "sintomas", { unique: false });
        objectStore.createIndex("id", "id", { unique: true });

        console.log("DB created and loaded");
    };
}
