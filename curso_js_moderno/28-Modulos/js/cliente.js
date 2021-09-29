/* IIFE
(function () {
    console.log("From an IIFE");

    const clientName = "Brian";

    window.lastName = "Florez"; // Global window
})();

const clientName1 = "Brian"; // Global window

*/

export const clientName = "Brian";
export const save = 200;

export function showInfo(name, save) {
    return `Client ${name} -  Save ${save}`;
}

export function hasBalance(save) {
    if (save > 0) {
        console.log("It has balance");
    } else {
        console.log("It does not have balance");
    }
}

export class Client {
    constructor(name, save) {
        this.name = name;
        this.save = save;
    }

    showInfo() {
        return `Client ${this.name} -  Save ${this.save}`;
    }
}

export default function newFunction() {
    console.log("This is the export default");
} // Only can have one export default
