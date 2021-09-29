const carDiv = document.querySelector(".card");

carDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("titulo")) {
        console.log("Click in title");
    }
    if (e.target.classList.contains("precio")) {
        console.log("Click in price");
    }
    if (e.target.classList.contains("card")) {
        console.log("Click in card");
    }
});
