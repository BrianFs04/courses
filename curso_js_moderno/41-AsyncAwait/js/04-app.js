function downloadNewClients() {
    return new Promise((resolve) => {
        console.log("Downloading clients...");

        setTimeout(() => {
            resolve("Clients were downloaded");
        }, 5000);
    });
}

function downloadNewOrders() {
    return new Promise((resolve) => {
        console.log("Downloading orders...");

        setTimeout(() => {
            resolve("Orders were donwloaded");
        }, 3000);
    });
}

const app = async () => {
    try {
        /* This way is only used when we want to get first a result and then the another one      
        const clients = await downloadNewClients();
        console.log(clients);

        const orders = await downloadNewOrders();
        console.log(orders); */

        // This improves a lot the performance since one does not belong to the another
        const response = await Promise.all([
            downloadNewClients(),
            downloadNewOrders(),
        ]);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

app();
