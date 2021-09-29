import { dateData, newDate } from "../functions.js";
import {
    petInput,
    ownerInput,
    phoneInput,
    dateInput,
    hourInput,
    symptomsInput,
    form,
} from "../selectors.js";

class App {
    constructor() {
        this.initApp();
    }

    initApp() {
        petInput.addEventListener("change", dateData);
        ownerInput.addEventListener("change", dateData);
        phoneInput.addEventListener("change", dateData);
        dateInput.addEventListener("change", dateData);
        hourInput.addEventListener("change", dateData);
        symptomsInput.addEventListener("change", dateData);

        form.addEventListener("submit", newDate);
    }
}

export default App;
