const nav = document.querySelector(".navegacion");

console.log(nav);
console.log(nav.childNodes); // White spaces are converted to "text" elements
console.log(nav.children); // Only real element of html

console.log(nav.children[1].nodeName); // A
console.log(nav.children[1].nodeType); // 1 - ELEMENT_NODE

const card = document.querySelector(".card");
card.children[1].children[1].textContent =
    "New heading from traversing the DOM";
card.children[0].src = "img/hacer3.jpg";
console.log(card.children[0]);

// Traversing from children to parent
console.log(card.parentElement.parentElement.parentElement); // main tag information

// Go to the next sibling
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

// Go to the last one and then to its previous
const lastCard = document.querySelector(".card:nth-child(4)");
console.log(lastCard.previousElementSibling);

// Go to the first and last one
console.log(nav.firstElementChild);
console.log(nav.lastElementChild);
