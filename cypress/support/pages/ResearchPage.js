export class ResearchPage {
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
}
