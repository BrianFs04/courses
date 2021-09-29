import { deleteDate, loadEdition } from "../functions.js";
import { datesContainer } from "../selectors.js";
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

    printDates({ dates }) {
        this.cleanHTML();
        dates.forEach((date) => {
            const {
                mascota,
                propietario,
                telefono,
                fecha,
                hora,
                sintomas,
                id,
            } = date;

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
            btnEdit.onclick = () => loadEdition(date);

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
        });
    }

    cleanHTML() {
        while (datesContainer.firstChild) {
            datesContainer.removeChild(datesContainer.firstChild);
        }
    }
}

export default UI;
