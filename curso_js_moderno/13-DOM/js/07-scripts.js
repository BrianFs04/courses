/* const heading = document.querySelector("h1");

heading.style.backgroundColor = "red";
heading.style.fontFamily = "Arial";
heading.style.textTransform = "uppercase"; */

const card = document.querySelector(".card");
card.classList.add("new-class", "second-class");
card.classList.remove("card");
console.log(card.classList);
