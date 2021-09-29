import { showAlert, validate } from "./funciones.js";
import { newClient } from "./API.js";

(function () {
    const form = document.querySelector("#formulario");

    form.addEventListener("submit", validateClient);

    function validateClient(e) {
        e.preventDefault();

        const name = document.querySelector("#nombre").value;
        const email = document.querySelector("#email").value;
        const phone = document.querySelector("#telefono").value;
        const enterprise = document.querySelector("#empresa").value;

        const client = {
            name,
            email,
            phone,
            enterprise,
        };

        if (validate(client)) {
            // show message
            showAlert("All fields are required");
            return;
        }

        newClient(client);
    }
})();
