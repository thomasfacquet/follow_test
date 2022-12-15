export class ResearchPage {
  visitWebsite() {
    cy.intercept("https://www.pokemon.com/pcom/api/gus/pcom/fr/").as(
      "displayOk"
    );
    cy.visit("/");
    cy.wait("@displayOk");
  }

  getAlertDialog() {
    cy.get("[role=alertdialog]").should("be.visible");
  }

  getRefuseCookies() {
    return cy.get("[id=onetrust-reject-all-handler]").should("be.visible");
  }

  getAdvancedResearch() {
    return cy
      .get(".filter-toggle-span")
      .contains("Afficher la recherche avancée");
  }

  getFilterList() {
    return cy.get(".pokedex-filter-tw-list").should("be.visible");
  }

  getResearchButton() {
    return cy
      .get("[id=search]")
      .should("be.visible")
      .should("contain.text", "Rechercher");
  }

  getResetButton() {
    cy.get("[id=reset]")
      .should("be.visible")
      .should("contain.text", "Réinitialiser");
  }

  getMinRange() {
    return cy
      .get("#minRangeBox")
      .should("be.visible")
      .should("have.value", "1");
  }

  getMaxRange() {
    return cy
      .get("#maxRangeBox")
      .should("be.visible")
      .should("have.value", "905");
  }

  getFilterType(rank) {
    return cy
      .get(".pokedex-filter-tw-list")
      .find(".type-filter")
      .eq(rank)
      .should("be.visible");
  }

  checkFilterResult(count) {
    cy.get(".results")
      .find(".animating")
      .should("be.visible")
      .should("have.have.length", count);
  }

  checkResult(name) {
    return cy
      .get(".pokedex-results")
      .find(".animating")
      .eq(0)
      .and("include.text", name);
  }

  checkResultLevel(rank) {
    return cy.get(".pokemon-info").find(".id").eq(0).and("include.text", rank);
  }

  getFilterWeakness(rank) {
    return cy
      .get(".pokedex-filter-tw-list")
      .find(".weakness-filter")
      .eq(rank)
      .should("be.visible");
  }

  getNoResults() {
    cy.get(".alert")
      .should("be.visible")
      .should("include.text", "Aucun Pokémon n'a été trouvé !");
  }
}
