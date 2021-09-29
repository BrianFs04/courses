// Variables
const form = document.querySelector("#formulario");
const tweetsList = document.querySelector("#lista-tweets");
let tweets = [];

// Event listeners
eventListeners();
function eventListeners() {
    // When the user adds a new tweet
    form.addEventListener("submit", addTweet);

    // When the document is ready
    document.addEventListener("DOMContentLoaded", () => {
        // Keeps the tweets in localStorage
        tweets = JSON.parse(localStorage.getItem("tweets")) || [];

        createHTML();
    });
}
// Functions
function addTweet(e) {
    e.preventDefault();

    // Textare where the user writes
    const tweet = document.querySelector("#tweet").value;

    // Validation
    if (tweet === "") {
        showError("It can't be empty");
        return; // Stop executing the function
    }

    const tweetObj = {
        id: Date.now(),
        tweet, // tweet: tweet,
    };

    // Adding to the tweets array
    tweets = [...tweets, tweetObj];

    // Once add it create the HTML
    createHTML();

    // Reset the form
    form.reset();
}

// Shows an error message
function showError(error) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = error;
    errorMessage.classList.add("error");

    // Insert it
    const content = document.querySelector("#contenido");
    content.appendChild(errorMessage);

    // Delete the alert after 3 seconds
    setTimeout(() => {
        errorMessage.remove();
    }, 3000);
}

function createHTML() {
    cleanHTML();

    if (tweets.length > 0) {
        tweets.forEach((tweet) => {
            // Add delete button
            const btnDelete = document.createElement("a");
            btnDelete.classList.add("borrar-tweet");
            tbnDelete.innerText = "X";

            // Delete function
            btnDelete.onclick = () => {
                deleteTweet(tweet.id);
            };

            // Create HTML
            const li = document.createElement("li");

            // Adding the tweet
            li.innerText = tweet.tweet;

            // Asign the button
            li.appendChild(btnDelete);

            // Add in html
            tweetsList.appendChild(li);
        });
    }

    syncStorage();
}

// Adds tweets to localStorage
function syncStorage() {
    localStorage.setItem("tweets", JSON.stringify(tweets));
}

// Delete tweet
function deleteTweet(id) {
    tweets = tweets.filter((tweet) => tweet.id !== id);
    createHTML();
}

// Clean HMTL
function cleanHTML() {
    while (tweetsList.firstChild) {
        tweetsList.removeChild(tweetsList.firstChild);
    }
}
