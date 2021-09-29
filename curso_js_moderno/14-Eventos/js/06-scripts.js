// Event bubbling

const carDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const title = document.querySelector(".titulo");

carDiv.addEventListener("click", (e) => {
    e.stopPropagation(); // Previene que el evento se dispare a los padres
    console.log("click in card");
});

infoDiv.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("click in info");
});

title.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("click in title");
});
