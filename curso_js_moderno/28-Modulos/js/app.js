/* IIFE
console.log(clientName1);
console.log(lastName);
*/

import newFunction, {
    clientName,
    save,
    showInfo,
    hasBalance,
    Client,
} from "./cliente.js";
// Import enterprise
import { Enterprise } from "./empresa.js";

newFunction();
console.log(clientName);
console.log(save);

console.log(showInfo(clientName, save));

hasBalance(save);

const client = new Client(clientName, save);

console.log(client);
console.log(client.showInfo());

const enterprise = new Enterprise("Code", 100, "Learning online");
console.log(enterprise);
console.log(enterprise.showInfo());
