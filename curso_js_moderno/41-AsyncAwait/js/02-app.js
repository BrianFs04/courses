function downloadClients() {
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve("The client list was downloaded properly");
            } else {
                reject("Connection error");
            }
        }, 3000);
    });
}

// Async await
async function execute() {
    // Parent function has to have async
    try {
        console.log(1 + 1);
        const response = await downloadClients(); // Stops the code execution until the promise gets resolved
        console.log(2 + 2); // It's going to wait after it gets a response
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

execute();
