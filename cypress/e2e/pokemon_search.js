import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ResearchPage } from "../support/pages/researchPage";

import * as result from "../fixtures/result.json";

const researchPage = new ResearchPage();

Given("a user accessing Pokemon website", () => {
  researchPage.visitWebsite();
  researchPage.getAlertDialog();
  researchPage.getRefuseCookies().click();
  researchPage.getAdvancedResearch().click();
  researchPage.getFilterList();
  researchPage.getResearchButton();
  researchPage.getResetButton();
});

When("a user research pokemon by type", () => {
  researchPage.getFilterType(result.typeRank).click();
  researchPage.getMinRange();
  researchPage.getMaxRange().clear().type(20);
  researchPage.getResearchButton().click({ multiple: true });
});

Then("pokemon list by type is displayed", () => {
  researchPage.checkFilterResult(result.typeCount);
  researchPage.checkResult(result.type);
  researchPage.checkResultLevel(result.typeLevel);
});

When("a user research pokemon by weakness", () => {
  researchPage.getFilterWeakness(result.weaknessRank).click();
  researchPage.getMinRange();
  researchPage.getMaxRange().clear().type(20);
  researchPage.getResearchButton().click({ multiple: true });
});

Then("pokemon list by weakness is displayed", () => {
  researchPage.checkFilterResult(result.weaknessCount);
  researchPage.checkResult(result.weakness);
  researchPage.checkResultLevel(result.weaknessLevel);
});

When("a user research pokemon by type and weakness", () => {
  researchPage.getFilterType(result.bothRank).click();
  researchPage.getFilterWeakness(result.bothRank).click();
  researchPage.getMinRange();
  researchPage.getMaxRange().clear().type(50);
  researchPage.getResearchButton().click({ multiple: true });
});

Then("pokemon list by type and weakness is displayed", () => {
  researchPage.checkFilterResult(result.bothCount);
  researchPage.checkResult(result.both);
  researchPage.checkResultLevel(result.bothLevel);
});

When("a user research pokemon with no criteria entered", () => {
  researchPage.getMinRange().clear();
  researchPage.getMaxRange().clear();
  researchPage.getResearchButton().click({ multiple: true });
});

Then("an alert message is displayed", () => {
  researchPage.getNoResults();
});
