// Variables and selectors
const form = document.querySelector("#agregar-gasto");
const expensesList = document.querySelector("#gastos ul");

// Events

eventListeners();
function eventListeners() {
    document.addEventListener("DOMContentLoaded", askBudget);

    form.addEventListener("submit", addExpense);
}

// Classes
class Budget {
    constructor(budget) {
        this.budget = Number(budget);
        this.left = Number(budget);
        this.expenses = [];
    }

    newExpense(expense) {
        this.expenses = [...this.expenses, expense];
        this.calculateLeft();
    }

    calculateLeft() {
        const expended = this.expenses.reduce(
            (total, expense) => total + expense.quantity,
            0
        );
        this.left = this.budget - expended;
    }

    deleteExpense(id) {
        this.expenses = this.expenses.filter((expense) => expense.id !== id);
        this.calculateLeft();
    }
}

class UI {
    insertBudget(quantity) {
        // Extract the values
        const { budget, left } = quantity;

        // Add to HTML
        document.querySelector("#total").textContent = budget;
        document.querySelector("#restante").textContent = left;
    }

    printAlert(message, type) {
        // create div
        const divMessage = document.createElement("div");
        divMessage.classList.add("text-center", "alert"); // Boostrap classes

        if (type === "error") {
            divMessage.classList.add("alert-danger");
        } else {
            divMessage.classList.add("alert-success");
        }

        // Error message
        divMessage.textContent = message;

        // Insert into HTML
        document.querySelector(".primario").insertBefore(divMessage, form);

        // Delete HTML
        setTimeout(() => {
            divMessage.remove();
        }, 3000);
    }

    addExpenseList(expenses) {
        // Iterate the expenses

        this.cleanHTML(); // Delete previous HTML

        expenses.forEach((expense) => {
            const { quantity, name, id } = expense;

            // Create a li
            const newExpense = document.createElement("li");
            newExpense.className =
                "list-group-item d-flex justify-content-between align-items-center";

            //newExpense.setAttribute("data-id", id); Does the same as the line below
            newExpense.dataset.id = id;

            // Add HTML of the expense
            newExpense.innerHTML = `${name} <span class="badge badge-primary badge-pill"> ${quantity} </span>`;

            // Button to delete the expense
            const btnDelete = document.createElement("button");
            btnDelete.classList.add("btn", "btn-danger", "borrar-gasto");
            btnDelete.innerHTML = "Delete &times"; // &times is a HTML entity which add the 'x'
            btnDelete.onclick = () => {
                deleteExpense(id);
            };
            newExpense.appendChild(btnDelete);

            // Add to HTML
            expensesList.appendChild(newExpense);
        });
    }

    cleanHTML() {
        while (expensesList.firstChild) {
            expensesList.removeChild(expensesList.firstChild);
        }
    }

    updateLeft(left) {
        document.querySelector("#restante").textContent = left;
    }

    checkBudget(budgetObj) {
        const { budget, left } = budgetObj;

        const leftDiv = document.querySelector(".restante");

        // Check 25%
        if (budget / 4 > left) {
            leftDiv.classList.remove("alert-success", "alert-warning");
            leftDiv.classList.add("alert-danger");
        } else if (budget / 2 > left) {
            // check 50%
            leftDiv.classList.remove("alert-success");
            leftDiv.classList.add("alert-warning");
        } else {
            //check refund
            leftDiv.classList.remove("alert-danger", "alert-warning");
            leftDiv.classList.add("alert-success");
        }

        // If total is less than or equal to 0
        if (left <= 0) {
            ui.printAlert("Budget has ran out", "error");
            form.querySelector("button[type='submit']").disabled = true;
        }
    }
}

// Instantiate
const ui = new UI();
let budget;

// Functions

function askBudget() {
    const userBudget = prompt("What's your budget?");

    if (
        userBudget === "" ||
        userBudget === null ||
        isNaN(userBudget) ||
        userBudget <= 0
    ) {
        window.location.reload(); // Reload the page
    }

    // Valid budget
    budget = new Budget(userBudget);

    ui.insertBudget(budget);
}

// Add expense
function addExpense(e) {
    e.preventDefault();

    // Read the data of the form
    const name = document.querySelector("#gasto").value;
    const quantity = Number(document.querySelector("#cantidad").value);

    // Validate
    if (name === "" || quantity === "") {
        ui.printAlert("Both inputs are required", "error");
        return;
    } else if (quantity <= 0 || isNaN(quantity)) {
        ui.printAlert("Not valid quantity");
        return;
    }

    // Generate an object with the expense
    // Object literal enhancement
    const expense = { name, quantity, id: Date.now() };

    // Add new expense
    budget.newExpense(expense);

    // All good message
    ui.printAlert("Expense added correctly");

    // Print the expenses
    const { expenses, left } = budget;
    ui.addExpenseList(expenses);
    ui.updateLeft(left);
    ui.checkBudget(budget);

    form.reset(); // Resets the form
}

function deleteExpense(id) {
    // Delete from the object
    budget.deleteExpense(id);

    // Delete expenses on the list
    const { expenses, left } = budget;
    ui.addExpenseList(expenses);
    ui.updateLeft(left);
    ui.checkBudget(budget);
}
