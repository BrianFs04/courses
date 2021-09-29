/* // Create HTML
const link = document.createElement("A");

// Adding text
link.textContent = "New Link";

// adding href
link.href = "/new-link";

console.log(link);

link.target = "_blank";
link.setAttribute("data-link", "new-link");
link.classList.add("any-class");
link.onclick = myFunction;

// Select the nav
const nav = document.querySelector("nav");
console.log(nav.children);
nav.insertBefore(link, nav.children[1]);

function myFunction() {
    alert("You did click");
}
*/

// Create a card
const p1 = document.createElement("P");
p1.textContent = "Concert";
p1.classList.add("categoria", "concierto");

const p2 = document.createElement("P");
p2.textContent = "Rock concert";
p2.classList.add("titulo");

const p3 = document.createElement("P");
p3.textContent = "$800 per person";
p3.classList.add("precio");

// Create div with info class
const info = document.createElement("DIV");
info.classList.add("info");
info.appendChild(p1);
info.appendChild(p2);
info.appendChild(p3);

// Create the img
const image = document.createElement("img");
image.src = "img/hacer2.jpg";
image.alt = "Alternative text";

// Create the card
const card = document.createElement("DIV");
card.classList.add("card");

// Asign the image
card.appendChild(image);

//Asign the info
card.appendChild(info);

console.log(card);

// Insert in HTML
const container = document.querySelector(".hacer .contenedor-cards");
container.appendChild(card); // Insert at the end
container.insertBefore(card, container.children[0]); // Insert at the beginnig
