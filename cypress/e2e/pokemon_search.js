import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ResearchPage } from "../support/pages/researchPage";

const researchPage = new ResearchPage();

Given("a user accessing Pokemon website", () => {
  cy.intercept("https://www.pokemon.com/pcom/api/gus/pcom/fr/").as("displayOk");
  cy.visit("/");
  cy.wait("@displayOk");
  researchPage.getAlertDialog();
  researchPage.getRefuseCookies().click();
  researchPage.getAdvancedResearch().click();
  cy.get(".pokedex-filter-tw-list").should("be.visible");
  cy.get("[id=search]")
    .should("be.visible")
    .should("contain.text", "Rechercher");
  cy.get("[id=reset]")
    .should("be.visible")
    .should("contain.text", "Réinitialiser");
});

When("a user research pokemon by type", () => {
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
});

Then("pokemon list by type is displayed", () => {
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

When("a user research pokemon by weakness", () => {
  cy.get(".pokedex-filter-tw-list")
    .find(".weakness-filter")
    .eq(3)
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
});

Then("pokemon list by weakness is displayed", () => {
  cy.get(".results")
    .find(".animating")
    .should("be.visible")
    .should("have.have.length", 8);
  cy.get(".pokedex-results")
    .find(".animating")
    .eq(0)
    .and("include.text", "Dracaufeu");
  cy.get(".pokemon-info").find(".id").eq(0).and("include.text", "006");
});

When("a user research pokemon by type and weakness", () => {
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
    .type(50)
    .should("have.value", "50");
  cy.get("[id=search]")
    .should("be.visible")
    .should("contain.text", "Rechercher")
    .click({ multiple: true });
});

Then("pokemon list by type and weakness is displayed", () => {
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

When("a user research pokemon with no criteria entered", () => {
  cy.get(".pokedex-filter-tw-list").should("be.visible");
  cy.get("#minRangeBox").should("be.visible").clear();
  cy.get("#maxRangeBox").clear();
  cy.get("[id=search]")
    .should("be.visible")
    .should("contain.text", "Rechercher")
    .click({ multiple: true });
});

Then("an alert message is displayed", () => {
  cy.get(".alert")
    .should("be.visible")
    .should("include.text", "Aucun Pokémon n'a été trouvé !");
});
