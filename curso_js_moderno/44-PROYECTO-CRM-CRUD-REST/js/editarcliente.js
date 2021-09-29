import { getClient, editClient } from "./API.js";
import { validate, showAlert } from "./funciones.js";

(function () {
    // Form fields
    const nameInput = document.querySelector("#nombre");
    const emailInput = document.querySelector("#email");
    const phoneInput = document.querySelector("#telefono");
    const enterpriseInput = document.querySelector("#empresa");
    const idInput = document.querySelector("#id");
    document.addEventListener("DOMContentLoaded", async () => {
        const paramsURL = new URLSearchParams(window.location.search);

        const idClient = Number(paramsURL.get("id"));

        const client = await getClient(idClient);

        showClient(client);

        // Submit form
        const form = document.querySelector("#formulario");
        form.addEventListener("submit", validateClient);
    });

    function showClient(client) {
        const { name, enterprise, email, phone, id } = client;

        nameInput.value = name;
        emailInput.value = email;
        phoneInput.value = phone;
        enterpriseInput.value = enterprise;
        idInput.value = id;
    }

    function validateClient(e) {
        e.preventDefault();

        const client = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            enterprise: enterpriseInput.value,
            id: parseInt(idInput.value),
        };

        if (validate(client)) {
            console.log(client.id);
            // show message
            showAlert("All fields are required");
            return;
        }

        // Rewrite the object
        editClient(client);
    }
})();
