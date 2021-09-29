// Delete elements of the localStorage
localStorage.removeItem("name");

// Update
const monthsArray = JSON.parse(localStorage.getItem("months"));
console.log(monthsArray);

monthsArray.push("New month");
console.log(monthsArray);

localStorage.setItem("months", monthsArray);

// Clean all localStorage
localStorage.clear();
