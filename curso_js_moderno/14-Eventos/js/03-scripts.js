const search = document.querySelector(".busqueda");

// Press a key
search.addEventListener("keydown", () => {
    console.log("Writing...");
});

// Press and release a key
search.addEventListener("keyup", () => {
    console.log("Writing...");
});

// copy
// paste
// cut
// input - all of the previous events in one

search.addEventListener("input", (e) => {
    console.log(e); // All the information about the event
});

search.addEventListener("input", (e) => {
    console.log(e.target.value); // Read what the user is writing
});
