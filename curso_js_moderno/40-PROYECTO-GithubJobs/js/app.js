const form = document.querySelector("#formulario");
const result = document.querySelector("#resultado");

document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener("submit", validateRequest);
});

function validateRequest(e) {
    e.preventDefault();

    const search = document.querySelector("#busqueda").value;

    if (search === "") {
        showMessage("Field required");
        return;
    }

    consultAPI(search);
}

function consultAPI(search) {
    const githubURL = `https://jobs.github.com/positions.json?search=${search}`;
    const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
        githubURL
    )}`;

    axios
        .get(url)
        .then((response) => showVacancies(JSON.parse(response.data.contents))); // As we are using axios always the response from the server is going to be located in data
}

function showMessage(message) {
    const prevAlert = document.querySelector(".alerta");
    if (!prevAlert) {
        const alert = document.createElement("p");
        alert.classList.add(
            "bg-gray-100",
            "p-3",
            "text-center",
            "mt-3",
            "alerta"
        );
        alert.textContent = message;

        form.appendChild(alert);

        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}

function cleanHTML() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}
function showVacancies(vacancies) {
    cleanHTML();

    if (vacancies.length > 0) {
        result.classList.add("grid");

        vacancies.forEach((vacant) => {
            const { title, company, type, url } = vacant;

            result.innerHTML = `    
            <div class="shadow bg-white p-6 rounded">
                <h2 class="text-2xl font-light mb-4">${title}</h2>
                <p class="font-bold uppercase">Compañia:  <span class="font-light normal-case">${company} </span></p>
                <p class="font-bold uppercase">Tipo de Contrato:   <span class="font-light normal-case">${type} </span></p>
                <a class="bg-teal-500 max-w-lg mx-auto mt-3 rounded p-2 block uppercase font-xl font-bold text-white text-center" href="${url}">Ver Vacante</a>
            </div>
            `;
        });
    } else {
        const noResult = document.createElement("p");
        noResult.classList.add(
            "text-center",
            "mt-10",
            "text-gray-600",
            "w-full"
        );
        result.classList.remove("grid");
        noResult.textContent = "No vacancies, try another search";
        result.appendChild(noResult);

        setTimeout(() => {
            result.remove();
        }, 3000);

        form.reset();
    }
}
