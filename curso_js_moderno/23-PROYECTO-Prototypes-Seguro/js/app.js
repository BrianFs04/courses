// Constructors

function Insurance(brand, year, type) {
    this.brand = brand;
    this.year = year;
    this.type = type;
}

// Do the insurance with data
Insurance.prototype.quoteInsurance = function () {
    let quantity;
    const base = 2000;
    switch (this.brand) {
        case "1":
            quantity = base * 1.15;
            break;
        case "2":
            quantity = base * 1.05;
            break;
        case "3":
            quantity = base * 1.35;
            break;
        default:
            break;
    }

    // Read the year
    const difference = new Date().getFullYear() - this.year;

    // Each year where the difference is bigger,cost is going to be reduced by 3%
    quantity -= (difference * 3 * quantity) / 100;

    /*
    If the insurance is basic is going to be multiplied by a 30% more
    If the insurance is full is going to be multiplied by a 50% more
    */
    if (this.type === "basico") {
        quantity *= 1.3;
    } else {
        quantity *= 1.5;
    }

    return quantity;
};

function UI() {}

// Fill year options
UI.prototype.fillOptions = () => {
    const max = new Date().getFullYear();
    const min = max - 20;

    const selectYear = document.querySelector("#year");

    for (let i = max; i > min; i--) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
};

// Show alerts on screen
UI.prototype.showMessage = (message, type) => {
    const div = document.createElement("div");

    if (type === "error") {
        div.classList.add("error");
    } else {
        div.classList.add("correcto");
    }
    div.classList.add("mensaje", "mt-10"); // mt-10 is a Tailwind class
    div.textContent = message;

    // Insert to HTML
    const form = document.querySelector("#cotizar-seguro");
    form.insertBefore(div, document.querySelector("#resultado"));

    setTimeout(() => {
        div.remove();
    }, 3000);
};

UI.prototype.showResult = (total, insurance) => {
    // Destructuring
    const { brand, year, type } = insurance;
    let brandText;

    switch (brand) {
        case "1":
            brandText = "American";
            break;
        case "2":
            brandText = "Asian";
            break;
        case "3":
            brandText = "European";
            break;
        default:
            break;
    }
    // Create the result
    const div = document.createElement("div");
    div.classList.add("mt-10");

    div.innerHTML = `
        <p class="header">Summary</p>
        <p class="font-bold">Brand: <span class="font-normal">${brandText}</span></p>
        <p class="font-bold">Year: <span class="font-normal">${year}</span></p>
        <p class="font-bold">Insurance type: <span class="font-normal capitalize">${type}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$${total}</span></p>
    `;

    const resultDiv = document.querySelector("#resultado");

    // Show the spinner
    const spinner = document.querySelector("#cargando");
    spinner.style.display = "block";

    setTimeout(() => {
        spinner.style.display = "none"; //Spinner gets deleted and result is shown
        resultDiv.appendChild(div);
    }, 3000);
};

// Instantiate UI
const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
    ui.fillOptions(); //Fill the select with years
});

eventListeners();
function eventListeners() {
    const form = document.querySelector("#cotizar-seguro");
    form.addEventListener("submit", quoteInsurance);
}

function quoteInsurance(e) {
    e.preventDefault();

    //Read the selected brand
    const brand = document.querySelector("#marca").value;

    // Read the selected year
    const year = document.querySelector("#year").value;

    // Read the "cobertura" type
    const type = document.querySelector("input[name='tipo']:checked").value; // Read input of radio type

    if (brand === "" || year === "" || type === "") {
        ui.showMessage("All fields are required", "error");
        return;
    }

    ui.showMessage("Quoting...", "exito");

    // Hide the previous quotes
    const results = document.querySelector("#resultado div");
    if (results != null) {
        results.remove();
    }

    // Instantiate insurance
    const insurance = new Insurance(brand, year, type);
    const total = insurance.quoteInsurance();

    //Use the prototype to quote
    ui.showResult(total, insurance);
}
