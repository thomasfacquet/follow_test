/// <reference types="cypress" />

import * as pokemon from "../fixtures/example.json";

describe("non regression test", () => {
  beforeEach(() => {
    cy.intercept("https://www.pokemon.com/pcom/api/gus/pcom/fr/").as(
      "displayOk"
    );
    cy.visit("/");
    cy.wait("@displayOk");
    cy.get("[role=alertdialog]").should("be.visible");
    cy.get("[id=onetrust-reject-all-handler]").should("be.visible").click();
    cy.get(".filter-toggle-span")
      .contains("Afficher la recherche avancée")
      .click();
    cy.get(".pokedex-filter-tw-list").should("be.visible");
    cy.get("[id=search]")
      .should("be.visible")
      .should("contain.text", "Rechercher");
    cy.get("[id=reset]")
      .should("be.visible")
      .should("contain.text", "Réinitialiser");
  });
  it("advanced research by type", () => {
    cy.get(".pokedex-filter-tw-list")
      .find(".type-filter")
      .eq(0)
      .should("be.visible")
      .click();
    cy.get("#minRangeBox").should("be.visible").should("have.value", "1");
    cy.get("#maxRangeBox")
      .should("be.visible")
      .clear()
      .type(20)
      .should("have.value", "20");
    cy.get("[id=search]")
      .should("be.visible")
      .should("contain.text", "Rechercher")
      .click({ multiple: true });
    cy.get(".results")
      .find(".animating")
      .should("be.visible")
      .should("have.have.length", 6);
    cy.get(".pokedex-results")
      .find(".animating")
      .eq(0)
      .and("include.text", "Chenipan");
    cy.get(".pokemon-info").find(".id").eq(0).and("include.text", "010");
  });

  it("advanced research by weakness", () => {
    cy.get(".pokedex-filter-tw-list").should("be.visible");
    cy.get(".pokedex-filter-tw-list")
      .find(".type-filter")
      .eq(0)
      .should("be.visible")
      .click();
    cy.get(".pokedex-filter-tw-list")
      .find(".weakness-filter")
      .eq(0)
      .should("be.visible")
      .click();
    cy.get("#minRangeBox").should("be.visible").should("have.value", "1");
    cy.get("#maxRangeBox")
      .should("be.visible")
      .clear()
      .type(20)
      .should("have.value", "20");
    cy.get("[id=search]")
      .should("be.visible")
      .should("contain.text", "Rechercher")
      .click({ multiple: true });
    cy.get(".alert")
      .should("be.visible")
      .should("include.text", "Aucun Pokémon n'a été trouvé !");
  });
  it("advanced research by type and weakness", () => {
    cy.get(".pokedex-filter-tw-list").should("be.visible");
    cy.get(".pokedex-filter-tw-list")
      .find(".weakness-filter")
      .eq(0)
      .should("be.visible")
      .click();
    cy.get("#minRangeBox").should("be.visible").should("have.value", "1");
    cy.get("#maxRangeBox")
      .should("be.visible")
      .clear()
      .type(50)
      .should("have.value", "50");
    cy.get("[id=search]")
      .should("be.visible")
      .should("contain.text", "Rechercher")
      .click({ multiple: true });
    cy.get(".results")
      .find(".animating")
      .should("be.visible")
      .should("have.have.length", 2);
    cy.get(".pokedex-results")
      .find(".animating")
      .eq(0)
      .and("include.text", "Paras");
    cy.get(".pokemon-info").find(".id").eq(0).and("include.text", "046");
  });
  it("advanced research with no criteria selected", () => {
    cy.get(".pokedex-filter-tw-list").should("be.visible");
    cy.get("#minRangeBox").should("be.visible").clear();
    cy.get("#maxRangeBox").clear();
    cy.get("[id=search]")
      .should("be.visible")
      .should("contain.text", "Rechercher")
      .click({ multiple: true });
    cy.get(".alert")
      .should("be.visible")
      .should("include.text", "Aucun Pokémon n'a été trouvé !");
  });
});
