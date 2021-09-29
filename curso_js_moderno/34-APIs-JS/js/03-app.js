window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);

function updateStatus() {
    if (navigator.online) {
        console.log("You're connected");
    } else {
        console.log("Not connected");
    }
}
