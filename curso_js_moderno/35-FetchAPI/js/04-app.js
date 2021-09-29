const loadAPIBtn = document.querySelector("#cargarAPI");
loadAPIBtn.addEventListener("click", getData);

function getData() {
    const url = "https://picsum.photos/list";
    fetch(url)
        .then((response) => response.json())
        .then((result) => showHTML(result));
}

function showHTML(data) {
    const content = document.querySelector(".contenido");

    let html = "";

    data.forEach((perfil) => {
        const { author, post_url } = perfil;

        html += `
            <p>Author: ${author}</p>
            <a href="${post_url}" target="_blank">Load image</a>
        `;
    });

    content.innerHTML = html;
}
