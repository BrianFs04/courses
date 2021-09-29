(function () {
    let DB;
    const form = document.querySelector("#formulario");

    document.addEventListener("DOMContentLoaded", () => {
        connectDB();
        form.addEventListener("submit", validateClient);
    });

    function validateClient(e) {
        e.preventDefault();

        // Read all the inputs
        const name = document.querySelector("#nombre").value;
        const email = document.querySelector("#email").value;
        const phone = document.querySelector("#telefono").value;
        const enterprise = document.querySelector("#empresa").value;

        if (name === "" || email === "" || phone === "" || enterprise === "") {
            printAlert("All fields are required", "error");
            return;
        }

        // Create an object with the information
        const client = {
            name,
            email,
            phone,
            enterprise,
        };

        client.id = Date.now();
        createNewClient(client);
    }

    function createNewClient(client) {
        let transaction = DB.transaction(["crm"], "readwrite");

        const objectStore = transaction.objectStore("crm");

        objectStore.add(client);

        transaction.onerror = function () {
            printAlert("There was an error", "error");
        };

        transaction.oncomplete = function () {
            printAlert("Client added correctly");

            setTimeout(() => {
                window.location.href = "index.html";
            }, 3000);
        };
    }
})();
