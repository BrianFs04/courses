(function () {
    let DB;
    const clientList = document.querySelector("#listado-clientes");

    document.addEventListener("DOMContentLoaded", () => {
        createDB();

        if (window.indexedDB.open("crm", 1)) {
            getClients();
        }

        clientList.addEventListener("click", deleteRegister);
    });

    function deleteRegister(e) {
        if (e.target.classList.contains("eliminar")) {
            const idDelete = Number(e.target.dataset.cliente);

            const confirm = confirm(
                "Are you sure you want to delete this client?"
            );

            if (confirm) {
                const transaction = DB.transaction(["crm"], "readwrite");
                const objectStore = transaction.objectStore("crm");

                objectStore.delete(idDelete);

                transaction.oncomplete = function () {
                    console.log("Deleting...");
                    e.target.parentElement.parentElement.remove();
                };

                transaction.onerror = function () {
                    console.log("There was an error");
                };
            }
            console.log(idDelete);
        }
    }

    // Create the database indexDB

    function createDB() {
        const createDB = window.indexedDB.open("crm", 1);

        createDB.onerror = function () {
            console.log("There was an error");
        };

        createDB.onsuccess = function () {
            DB = createDB.result;
        };

        createDB.onupgradeneeded = function (e) {
            const db = e.target.result;

            const objectStore = db.createObjectStore("crm", {
                keyPath: "id",
                autoIncrement: true,
            });

            objectStore.createIndex("name", "name", { unique: false });
            objectStore.createIndex("email", "email", { unique: true });
            objectStore.createIndex("phone", "phone", { unique: false });
            objectStore.createIndex("enterprise", "enterprise", {
                unique: false,
            });
            objectStore.createIndex("id", "id", { unique: true });

            console.log("DB ready and created");
        };
    }

    function getClients() {
        const openConnection = window.indexedDB.open("crm", 1);

        openConnection.onerror = function () {
            console.log("There was an error");
        };

        openConnection.onsuccess = function () {
            DB = openConnection.result;

            const objectStore = DB.transaction("crm").objectStore("crm");

            objectStore.openCursor().onsuccess = function (e) {
                const cursor = e.target.result;

                if (cursor) {
                    const { name, enterprise, email, phone, id } = cursor.value;

                    clientList.innerHTML += ` 
                    <tr>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
                            <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                            <p class="text-gray-700">${phone}</p>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                            <p class="text-gray-600">${enterprise}</p>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                            <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                            <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                        </td>
                    </tr>`;
                    cursor.continue();
                } else {
                    console.log("There are no more registers");
                }
            };
        };
    }
})();
