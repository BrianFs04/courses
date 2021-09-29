// Scroll events
/* window.addEventListener("scroll", () => {
    const scrollPX = windows.scrollY;

    console.log(scrollPX);
});
 */
window.addEventListener("scroll", () => {
    const premium = document.querySelector(".premium");
    const location = premium.getBoundingClientRect(); // Location to the element

    //console.log(location) // to Debug
    if (location.top < 784) {
        console.log("Element is visible");
    } else {
        console.log("It's not visible yet");
    }
});
