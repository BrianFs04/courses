document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        console.log("Play the video");
    } else {
        console.log("Pause the video");
    }
});
