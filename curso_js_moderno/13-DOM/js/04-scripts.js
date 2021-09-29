// It's going to return the first match
const card = document.querySelector(".card");
console.log(card);

// We can have specific selectors as in CSS
const info = document.querySelector(".premiun .info");
console.log(info);

const secondCard = document.querySelector(
    "section.hospedaje .card:nth-child(2)"
);
console.log(secondCard);

// To select the form by its unique id
const form = document.querySelector("#formulario");
console.log(form);

// To select HTML elements
const nav = document.querySelector("nav");
console.log(nav);
