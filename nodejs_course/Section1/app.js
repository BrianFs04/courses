/* console.log(global); // It's the same as window in JS
console.log(__dirname);
console.log(__filename); */

/* const { users, numbers } = require("./users"); */
/* import { users, numbers } from "./users.js"; // It is necessary the extension

console.log(users, "\n", numbers); */

// File system module
import fs from "fs";

// read file
/* fs.readFile("./note.txt", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});

// write a file
fs.writeFile("./note.txt", "New message", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("New message added");
    }
}); */

// Append file
/* fs.appendFile("./note.txt", "New message 2\r\n", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("New message 2 added");
    }
}); */

// Create folder
/* if (!fs.existsSync("newfolder")) {
    fs.mkdir("newfolder", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("A new folder created");
        }
    });
} else {
    console.log("The folder already exists");
} */

// Delete folder
if (fs.existsSync("newfolder")) {
    fs.rmdir("newfolder", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Folder deleted");
        }
    });
} else {
    console.log("The folder does not exist");
}
