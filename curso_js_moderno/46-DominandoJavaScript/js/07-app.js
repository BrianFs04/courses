// Event loop

console.log("First");

setTimeout(() => {
    console.log("Second");
}, 0);

console.log("Third");

setTimeout(() => {
    console.log("Four");
}, 0);

new Promise(function (resolve) {
    resolve("Unknown....");
}).then(console.log);

console.log("Last");

function hey() {
    console.log("Hey");
}

hey();

/* 
First
Third
Last
Hey
Unknown...
Second
Four
*/
