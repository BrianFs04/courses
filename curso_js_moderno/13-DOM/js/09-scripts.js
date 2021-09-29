const firstLink = document.querySelector("a");
firstLink.remove();
console.log(firstLink);

// Delete from the parent
const nav = document.querySelector(".navegacion");
console.log(nav.children);
nav.removeChild(nav.children[2]);
