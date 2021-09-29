if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("./sw.js")
        .then((registrated) =>
            console.log("It was instaled correctly", registrated)
        )
        .catch((error) => console.log("Instalation failed", error));
} else {
    console.log("Service worker not supported");
}
