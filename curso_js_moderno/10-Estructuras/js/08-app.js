// Good practices
const authenticated = true;

if (authenticated) {
    console.log("User it's authenticated");
}

const score = 500;

if (score > 400) {
    console.log("Excelent!!!");
} else if (score > 300) {
    console.log("Good score... Congrats");
}

// It's more realistic this way
function checkScore() {
    if (score > 400) {
        console.log("Excelent!!!");
        return;
    }
    if (score > 350) {
        console.log("Good score... Congrats");
        return;
    }
}

checkScore();
