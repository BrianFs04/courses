const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const months2 = ["Aug", "Sep"];
const months3 = ["Oct", "Nov", "Dec"];

// .concat
const result = months.concat(months2, months3);
console.log(result);

// spread operator or rest operator
const result2 = [...months, ...months2, ...months3];
console.log(result2);
