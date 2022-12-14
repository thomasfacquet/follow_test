/// <reference types="cypress" />

describe("non regression test", () => {
  it("access to advanced research", () => {
    cy.intercept("https://www.pokemon.com/pcom/api/gus/pcom/fr/").as(
      "displayOk"
    );
    cy.visit("/");
    cy.wait("@displayOk");
    cy.get("[id=onetrust-reject-all-handler]").should("be.visible").click();
    cy.get(".filter-toggle-span")
      .contains("Afficher la recherche avancée")
      .click();
    cy.get(".column-7").should("be.visible");
  });
});
