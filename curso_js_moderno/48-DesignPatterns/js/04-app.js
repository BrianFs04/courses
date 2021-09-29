// Factory - Create objects based in certain conditions

class InputHTML {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }

    createInput() {
        return `<input type="${this.type}" name="${this.name}" id="${this.name}">`;
    }
}

class HTMLFactory {
    createElement(type, name) {
        switch (type) {
            case "text":
                return new InputHTML("text", name);
            case "tel":
                return new InputHTML("tel", name);
            case "email":
                return new InputHTML("email", name);
            default:
                return;
        }
    }
}

const element = new HTMLFactory();
const inputText = element.createElement("text", "name-client");
console.log(inputText.createInput());

const element2 = new HTMLFactory();
const inputText2 = element2.createElement("tel", "phone-client");
console.log(inputText2.createInput());

const element3 = new HTMLFactory();
const inputText3 = element3.createElement("email", "email-client");
console.log(inputText3.createInput());
