const url = "http://localhost:4000/clients";

// Create a new client
export const newClient = async (client) => {
    try {
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(client),
            headers: {
                "Content-Type": "application/json",
            },
        });
        window.location.href = "index.html";
    } catch (error) {
        console.log(error);
    }
};

// Gets all clients
export const getClients = async () => {
    try {
        const result = await fetch(url);
        const clients = await result.json();
        return clients;
    } catch (error) {
        console.log(error);
    }
};

// Deletes a client
export const deleteClient = async (id) => {
    try {
        await fetch(`${url}/${id}`, {
            method: "DELETE",
        });
    } catch (error) {
        console.log(error);
    }
};

// Get a client by ID
export const getClient = async (id) => {
    try {
        const result = await fetch(`${url}/${id}`);
        const client = await result.json();
        return client;
    } catch (error) {
        console.log(error);
    }
};

// Updates a record
export const editClient = (client) => {
    try {
        fetch(`${url}/${parseInt(client.id)}`, {
            method: "PUT",
            body: JSON.stringify(client),
            headers: {
                "Content-Type": "application/json",
            },
        });
        window.location.href = "index.html";
    } catch (error) {
        console.log(error);
    }
};
