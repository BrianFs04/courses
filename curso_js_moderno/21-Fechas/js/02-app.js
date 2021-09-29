// Examples with moment.js
const today = new Date();

moment.locale("es"); // Transform date into Spanish

console.log(moment().format("MMMM Do YYYY h:mm:ss a"));

console.log(moment().format("LLLL", today));

console.log(moment().add(3, "days").calendar());
