initApp();

function initApp() {
    console.log("Iniciando App...");
    SecondFunction();
}

function SecondFunction() {
    console.log("From the second function");
    AuthenticatedUser("Pablo");
}

function AuthenticatedUser(user) {
    console.log("Loggin in... wait...");
    console.log("User logged in correctly!: ${user}");
}
