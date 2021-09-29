let DB;

document.addEventListener("DOMContentLoaded", () => {
    crmDB();

    setTimeout(() => {
        createClient();
    }, 5000);
});

function crmDB() {
    // Create a DB version 1.0
    let crmDB = window.indexedDB.open("crm", 1);

    // If there ir an error
    crmDB.onerror = function () {
        console.log("There was an error while creating the DB");
    };
    // If it was created correctly
    crmDB.onsuccess = function (e) {
        console.log("BD created");

        DB = e.target.result;
    };
    // Configuration
    crmDB.onupgradeneeded = function (e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore("crm", {
            keyPath: "crm",
            autoIncrement: true,
        });

        // Define the columns
        objectStore.createIndex("name", "name", {
            unique: false,
        });
        objectStore.createIndex("email", "email", {
            unique: true,
        });
        objectStore.createIndex("phone", "phone", {
            unique: false,
        });
    };
}

function createClient() {
    let transaction = DB.transaction(["crm"], "readwrite");

    transaction.oncomplete = function () {
        console.log("Transaction completed");
    };

    transaction.onerror = function () {
        console.log("There was an error on the transaction");
    };

    const objectStore = transaction.objectStore("crm");

    const newClient = {
        phone: 3135420512,
        name: "Brian",
        email: "xxxxx@gmail.com",
    };

    const demand = objectStore.add(newClient);

    console.log(demand);
}
