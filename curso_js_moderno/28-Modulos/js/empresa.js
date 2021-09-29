import { Client } from "./cliente.js";

export class Enterprise extends Client {
    constructor(name, save, category) {
        super(name, save);
        this.category = category;
    }

    showInfo() {
        return `Client ${this.name} -  Save ${this.save} - Category ${this.category}`;
    }
}
