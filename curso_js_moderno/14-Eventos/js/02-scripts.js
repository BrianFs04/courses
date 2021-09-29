const nav = document.querySelector(".navegacion");

// Register an event
nav.addEventListener("click", () => {
    console.log("Click in navbar");
});

nav.addEventListener("mouseenter", () => {
    console.log("Getting in nav bar");
});

nav.addEventListener("mouseout", () => {
    console.log("Getting out the nav bar");
});

// mousedown similar to click
// click
// dblclick = double click
// mouseup = when I release the mouse
