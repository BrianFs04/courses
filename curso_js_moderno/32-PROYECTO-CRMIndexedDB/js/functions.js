const form = document.querySelector("#formulario");

function connectDB() {
    const openConnection = window.indexedDB.open("crm", 1);

    openConnection.onerror = function () {
        console.log("There was an error");
    };

    openConnection.onsuccess = function () {
        DB = openConnection.result; // Keep in this variable an instance to the connection to the DB with all methods we have available
    };
}

function printAlert(message, type) {
    const alert = document.querySelector(".alerta");
    // create the alert
    if (!alert) {
        const divAlert = document.createElement("div");
        divAlert.classList.add(
            "px-4",
            "py-3",
            "rounded",
            "max-w-lg",
            "mx-auto",
            "mt-6",
            "text-center",
            "border",
            "alerta"
        );

        if (type === "error") {
            divAlert.classList.add(
                "bg-red-100",
                "border-red-400",
                "text-red-700"
            );
        } else {
            divAlert.classList.add(
                "bg-green-100",
                "border-green-400",
                "text-green-700"
            );
        }

        divAlert.textContent = message;

        form.appendChild(divAlert);

        setTimeout(() => {
            divAlert.remove();
        }, 3000);
    }
}
