const shopCar = document.querySelector("#carrito");
const carContainer = document.querySelector("#lista-carrito tbody");
const deleteCar = document.querySelector("#vaciar-carrito");
const coursesList = document.querySelector("#lista-cursos");
let carArticles = [];

loadEventListeners();
function loadEventListeners() {
    // To add a course pressing "Agregar al carrito"
    coursesList.addEventListener("click", addCourse);

    // Delete elements from the car
    shopCar.addEventListener("click", deleteCourse);

    // Show courses in localStorage
    document.addEventListener("DOMContentLoaded", () => {
        carArticles = JSON.parse(localStorage.getItem("car")) || [];
        carHTML();
    });

    // Empty the whole car
    deleteCar.addEventListener("click", () => {
        carArticles = []; // Reset the array
        cleanHTML();
    });
}

//Functions
function addCourse(e) {
    e.preventDefault();
    if (e.target.classList.contains("agregar-carrito")) {
        const selectedCourse = e.target.parentElement.parentElement; // access to the whole div of the course
        readCourse(selectedCourse);
    }
}

// Delete elements from the car
function deleteCourse(e) {
    console.log(e.target.classList);
    if (e.target.classList.contains("borrar-curso")) {
        const courseId = e.target.getAttribute("data-id");

        // Delete of the array carArticles thanks to the data-id
        carArticles = carArticles.filter((course) => course.id !== courseId);

        carHTML(); // Iterate the car and get its HTML
    }
}

// Reads the content and prints info of the course
function readCourse(course) {
    // Create an object with the current course
    const courseInfo = {
        image: course.querySelector("img").src,
        title: course.querySelector("h4").textContent,
        price: course.querySelector(".precio span").textContent,
        id: course.querySelector("a").getAttribute("data-id"),
        quantity: 1,
    };
    //console.log(courseInfo);

    // Checks if an element already exist in the car
    const exist = carArticles.some((course) => course.id === courseInfo.id);
    if (exist) {
        // Update the quantity
        let result;
        const courses = carArticles.map((course) => {
            if (course.id === courseInfo.id) {
                course.quantity++;
                result = courseInfo.price.split("$")[1] * course.quantity;
                course.price = `$${result}`;
                return course; // Return the updated object
            } else {
                return course; // Return the objects that are not duplicated
            }
        });
        carArticles = [...carArticles];
    } else {
        // Add the course to the car
        carArticles = [...carArticles, courseInfo];
    }
    // Add elements to the car array
    console.log(carArticles);
    carHTML();
}

function carHTML() {
    // Clean HTML
    cleanHTML();

    // Scroll the car and generates the HTML
    carArticles.forEach((course) => {
        // Destructuring to improve the code
        const { image, title, price, quantity, id } = course;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${image}" width="100">
            </td>
            <td>${title}</td>
            <td>${price}</td>
            <td>${quantity}</td>
            <!-- Delete from the card -->
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> x </a>
            </td>
        `;
        // Add HTML of the car in tbody
        carContainer.appendChild(row);
    });

    // Add car to localStorage
    syncStorage();
}

function syncStorage() {
    localStorage.setItem("car", JSON.stringify(carArticles));
}
// Delete the courses of tbody
function cleanHTML() {
    // Slow way
    //carContainer.innerHTML = "";
    // Fast way - way faster than innerHTML
    while (carContainer.firstChild) {
        carContainer.removeChild(carContainer.firstChild);
    }
}
