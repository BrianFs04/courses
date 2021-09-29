const today = new Date(); // Requires instantiation Date.now() is the only one that does not require one
let value;

value = today;

value = today.getFullYear(); // Current year
value = today.getMonth(); // 0 representing Januray
value = today.getMinutes(); //
value = today.getHours();
value = today.getTime(); // Milliseconds since January the first 1970

// functions that start with set allows us to modify the value
console.log(value);
