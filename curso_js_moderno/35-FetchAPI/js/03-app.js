const loadJSONArray = document.querySelector("#cargarJSONArray");
loadJSONArray.addEventListener("click", getData);

function getData() {
    const url = "data/empleados.json";
    fetch(url)
        .then((response) => response.json())
        .then((result) => showHTML(result))
        .catch((error) => console.log(error));
}

function showHTML(empleados) {
    const content = document.querySelector(".contenido");

    let html = "";

    empleados.forEach((empleado) => {
        const { id, nombre, empresa, trabajo } = empleado;

        html += `
            <p>Employee: ${nombre}<p>
            <p>ID: ${id}<p>
            <p>Enterprise: ${empresa}<p>
            <p>Work: ${trabajo}<p>
        `;
    });

    content.innerHTML = html;
}
