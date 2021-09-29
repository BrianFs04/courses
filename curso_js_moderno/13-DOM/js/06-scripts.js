const heading = document.querySelector(".contenido-hero h1");
console.log(heading);

console.log(heading.innerText); // It's not going to find a hidden element
console.log(heading.innerContent); // It's going to find it even if it's hidden
console.log(heading.innerHTML); // bring html

const heading2 = document.querySelector(".contenido-hero h1").innerContent;
console.log("heading2");

const newHeading = "New Heading";
document.querySelector(".contenido-hero h1").innerContent = newHeading;

const image = document.querySelector(".card .img");
image.src = "img/hacer2.jpg";
