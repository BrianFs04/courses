fetch("http://localhost:4000/pacientes")
    .then((res) => res.json())
    .then((datos) => mostrarCitas(datos));

function mostrarCitas(citas) {
    const contenedorCitas = document.querySelector("#citas");

    let citasHTML = "";

    citas.forEach((cita) => {
        const { nombre, fecha, hora, sintomas, propietario, telefono } = cita;
        citasHTML += `<div
                class="p-5 list-group-item list-group-item-action flex-column align-items-start"
            >
                <div class="d-flex w-100 justify-content-between mb-4">
                    <h3 class="mb-3">${nombre}</h3>
                    <small class="fecha-alta">
                        ${fecha} - ${hora}
                    </small>
                </div>
                <p class="mb-0">${sintomas}</p>
                <div class="contacto py-3">
                    <p>Propietario: ${propietario}</p>
                    <p>Teléfono: ${telefono}</p>
                </div>
            </div>`;
    });

    // Insertar el HTML
    contenedorCitas.innerHTML = citasHTML;
}
