// New binding
function Car(model, color) {
    this.model = model;
    this.color = color;
}

const car = new Car("Camaro", "Black");
console.log(car);

// Window binding
window.color = "black";
function hey() {
    console.log(color);
}

hey();
