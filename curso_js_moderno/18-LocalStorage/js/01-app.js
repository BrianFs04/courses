// Add elements to local storage ("key", "value")
// It only storages strings
localStorage.setItem("name", "Brian");

const product = {
    name: "24 inches monitor",
    price: 300,
};

const productString = JSON.stringify(product);
localStorage.setItem("product", productString);

const months = ["Jan", "Feb", "Mar"];
localStorage.setItem("months", JSON.stringify(months));
