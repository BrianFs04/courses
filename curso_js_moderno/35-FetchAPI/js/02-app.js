const loadJSONBtn = document.querySelector("#cargarJSON");
loadJSONBtn.addEventListener("click", getData);

function getData() {
    const url = "data/empleado.json";
    fetch(url)
        .then((response) => response.json())
        .then((result) => showHTML(result));
}

function showHTML({ empresa, id, nombre, trabajo }) {
    const content = document.querySelector(".contenido");

    content.innerHTML = `
        <p>Employee: ${nombre}<p>
        <p>ID: ${id}<p>
        <p>Enterprise: ${empresa}<p>
        <p>Work: ${trabajo}<p>
    `;
}
