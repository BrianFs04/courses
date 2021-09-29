import * as UI from "./interfaz.js";

class API {
    constructor(singer, song) {
        this.singer = singer;
        this.song = song;
    }

    consultAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.singer}/${this.song}`;

        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                if (result.lyrics) {
                    const { lyrics } = result;

                    UI.divResult.textContent = lyrics;
                    UI.headingResult.textContent = `Lyrics of "${this.song}" by ${this.singer}`;
                } else {
                    UI.divMessages.textContent =
                        "The song does not exits, try another search";
                    UI.divMessages.classList.add("error");

                    setTimeout(() => {
                        UI.divMessages.remove();
                    }, 3000);
                }
            })
            .catch((error) => console.log(error));

        UI.formSearch.reset();
    }
}

export default API;
