// Mejora el autocompletado
/// <reference types="cypress" />

describe("Carga la página principal", () => {
    it("Carga la página principal", () => {
        cy.visit("/index.html");

        // Verificar elemento y texto
        cy.contains(
            "[data-cy='titulo-proyecto']",
            "Administrador de Pacientes de Veterinaria"
        );

        // Verificar que exista
        //cy.get("h1").should("exist"); // This should never be done
        cy.get("[data-cy='titulo-proyecto']").should("exist");

        // Verificar que exista el elemento y que contenga un texto en especifico
        cy.get("[data-cy='titulo-proyecto']")
            .invoke("text")
            .should(
                "equal",
                "\n            Administrador de Pacientes de Veterinaria\n        "
            );

        // Verificar texto en citas
        cy.get("[data-cy='citas-heading']")
            .invoke("text")
            .should("equal", "No hay Citas, comienza creando una");
    });
});
