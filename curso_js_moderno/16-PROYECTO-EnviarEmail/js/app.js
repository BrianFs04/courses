// Variables
const btnSend = document.querySelector("#enviar");
const btnReset = document.querySelector("#resetBtn");
const form = document.querySelector("#enviar-mail");

// Input variables
const email = document.querySelector("#email");
const subject = document.querySelector("#asunto");
const message = document.querySelector("#mensaje");
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();
function eventListeners() {
    // When app starts
    document.addEventListener("DOMContentLoaded", initApp);

    // Form's input
    email.addEventListener("blur", validateForm);
    subject.addEventListener("blur", validateForm);
    message.addEventListener("blur", validateForm);

    // Reset the form
    btnReset.addEventListener("click", resetTheForm);

    // Send email
    btnSend.addEventListener("click", sendEmail);
}
// Functions
function initApp() {
    btnSend.disabled = true;
    btnSend.classList.add("cursor-not-allowed", "opacity-50");
}

// Validate the form
function validateForm(e) {
    if (e.target.value.length > 0) {
        // Delete errors
        const error = document.querySelector("p.error");
        if (error) {
            error.remove();
        }
        e.target.classList.remove("border", "border-red-500");
        e.target.classList.add("border", "border-green-500");
        //console.log("There is something");
    } else {
        e.target.classList.remove("border", "border-green-500");
        e.target.classList.add("border", "border-red-500");
        showError("All fields are required");
    }

    if (e.target.type === "email") {
        //const result = e.target.value.indexOf("@"); // Search in the string at least one @
        if (re.test(e.target.value)) {
            const error = document.querySelector("p.error");
            if (error) {
                error.remove();
            }
            e.target.classList.remove("border", "border-red-500");
            e.target.classList.add("border", "border-green-500");
        } else {
            e.target.classList.remove("border", "border-green-500");
            e.target.classList.add("border", "border-red-500");
            showError("Not valid email");
        }
    }

    if (re.test(email.value) && subject.value !== "" && message.value !== "") {
        btnSend.disabled = false;
        btnSend.classList.remove("cursor-not-allowed", "opacity-50");
    }
}

function showError(message) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = message;
    errorMessage.classList.add(
        "border",
        "border-red-500",
        "background-red-100",
        "text-red-500",
        "p-3",
        "mt-5",
        "text-center",
        "error"
    );
    const errors = document.querySelectorAll(".error");
    if (errors.length === 0) {
        form.appendChild(errorMessage);
    }
}

// Send email
function sendEmail(e) {
    e.preventDefault();
    console.log("entering 1");

    // show the spinner
    const spinner = document.querySelector("#spinner");
    spinner.style.display = "flex";

    // Hide it after 3 seconds and show the message
    setTimeout(() => {
        spinner.style.display = "none";

        // Message
        const paragraph = document.createElement("p");
        paragraph.textContent = "The message was sent";
        paragraph.classList.add(
            "text-center",
            "my-10",
            "p-2",
            "bg-green-500",
            "text-white",
            "font-bold",
            "uppercase"
        );

        form.insertBefore(paragraph, spinner);

        // Remove the text after 3 seconds and reset the form
        setTimeout(() => {
            paragraph.remove();
            resetTheForm();
        }, 3000);
    }, 3000);
}

// Function that resets the form
function resetTheForm() {
    console.log("Entering 2");
    form.reset();
    initApp(); // Disabled the send button again
}
