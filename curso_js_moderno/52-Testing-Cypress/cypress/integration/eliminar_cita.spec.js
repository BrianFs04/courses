// Mejora el autocompletado
/// <reference types="cypress" />

describe("LLena los campos para una nueva cita y la elimina", () => {
    it("campos nueva cita", () => {
        cy.visit("/index.html");

        cy.get("[data-cy='mascota-input']").type("Hook");
        cy.get("[data-cy='propietario-input']").type("Brian");
        cy.get("[data-cy='telefono-input']").type("3124423214");
        cy.get("[data-cy='fecha-input']").type("2021-02-16");
        cy.get("[data-cy='hora-input']").type("12:30");
        cy.get("[data-cy='sintomas-textarea']").type("Duerme mucho");

        cy.get("[data-cy='submit-cita']").click();

        cy.get("[data-cy='citas-heading']")
            .invoke("text")
            .should("equal", "Administra tus Citas");

        // Seleccionar la alerta
        cy.get("[data-cy='alerta']")
            .invoke("text")
            .should("equal", "Se agregó correctamente");

        cy.get("[data-cy='alerta']").should("have.class", "alert-success");
    });

    it("Eliminar cita", () => {
        cy.get("[data-cy='btn-eliminar']").click();

        cy.get("[data-cy='citas-heading']")
            .invoke("text")
            .should("equal", "No hay Citas, comienza creando una");
    });
});
