(function () {
    let DB;
    let idClient;
    const nameInput = document.querySelector("#nombre");
    const emailInput = document.querySelector("#email");
    const phoneInput = document.querySelector("#telefono");
    const enterpriseInput = document.querySelector("#empresa");

    const form = document.querySelector("#formulario");

    document.addEventListener("DOMContentLoaded", () => {
        connectDB();

        // Update the client
        form.addEventListener("submit", updateClient);
        // Verify the ID of the URL
        const paramsURL = new URLSearchParams(window.location.search);

        idClient = paramsURL.get("id");
        if (idClient) {
            setTimeout(() => {
                getClient(idClient);
            }, 500);
        }
    });

    function updateClient(e) {
        e.preventDefault();

        if (
            nameInput.value === "" ||
            emailInput.value === "" ||
            phoneInput.value === "" ||
            enterpriseInput.value === ""
        ) {
            printAlert("All fields are required", "error");
            return;
        }

        // Update client
        const updatedClient = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            enterprise: enterpriseInput.value,
            id: Number(idClient),
        };

        const transaction = DB.transaction(["crm"], "readwrite");
        const objectStore = transaction.objectStore("crm");

        objectStore.put(updatedClient);

        transaction.oncomplete = function () {
            printAlert("Edited correctly");

            setTimeout(() => {
                window.location.href = "index.html";
            }, 3000);
        };

        transaction.onerror = function () {
            printAlert("There was an error", "error");
        };
    }

    function getClient(id) {
        const transaction = DB.transaction(["crm"], "readwrite");
        const objectStore = transaction.objectStore("crm");

        const client = objectStore.openCursor();
        client.onsuccess = function (e) {
            const cursor = e.target.result;

            if (cursor) {
                if (cursor.value.id === Number(id)) {
                    fillForm(cursor.value);
                }
                cursor.continue();
            }
        };
    }

    function fillForm(clientData) {
        const { name, email, phone, enterprise } = clientData;

        nameInput.value = name;
        emailInput.value = email;
        phoneInput.value = phone;
        enterpriseInput.value = enterprise;
    }

    function connectDB() {
        const openConnection = window.indexedDB.open("crm", 1);

        openConnection.onerror = function () {
            console.log("There was an error");
        };

        openConnection.onsuccess = function () {
            DB = openConnection.result; // Keep in this variable an instance to the connection to the DB with all methods we have available
        };
    }
})();
