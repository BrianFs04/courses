// Speech recognition API
const output = document.querySelector("#salida");
const mic = document.querySelector("#microfono");

mic.addEventListener("click", executeSpeechAPI);

function executeSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onstart = function () {
        output.classList.add("mostrar");
        output.textContent = "Listening...";
    };

    recognition.onspeechend = function () {
        output.textContent = "Recording stopped";
        recognition.stop();
    };

    recognition.onresult = function (e) {
        console.log(e.results);

        const { confidence, transcript } = e.results[0][0];

        const speech = document.createElement("p");
        speech.innerHTML = `Recorded ${transcript}`;

        const confidenceRate = document.createElement("p");
        confidenceRate.innerHTML = `Confidence: ${confidence * 100}%`;

        output.appendChild(speech);
    };
}
