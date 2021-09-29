import * as UI from "./interfaz.js";
import API from "./api.js";

UI.formSearch.addEventListener("submit", searchSong);

function searchSong(e) {
    e.preventDefault();

    // Get data from the form
    const singer = document.querySelector("#artista").value;
    const song = document.querySelector("#cancion").value;

    if (singer === "" || song === "") {
        // User left an empty input
        UI.divMessages.textContent = "Error... All fields are required";
        UI.divMessages.classList.add("error");

        setTimeout(() => {
            UI.divMessages.textContent = "";
            UI.divMessages.classList.remove("error");
        }, 3000);
        return;
    }

    // Consult the API
    const search = new API(singer, song);
    search.consultAPI();
}
