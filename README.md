# Follow_test

---

### Langage, framework :

Tests scenarios are written in JAVASCRIPT with the help of CYPRESS framework.
A Gherkin layer is used with CUCUMBER PREPROCESSOR

### Pre-requisities / dependencies :

| Dependency                    | Version  |
| ----------------------------- | -------- |
| cypress                       | `12.1.0` |
| cypress-cucumber-preprocessor | `15.0.0` |

---

### How to :

```
git clone https://github.com/thomasfacquet/follow_test.git
cd follow_test
npm install
```

Then

- `npm run cy:open` : to launch Cypress
- `npm run cy:run`: to launch headless test suite
- `npm run cy:run:dashboard`: to launch headless test suite with execution results on Cypress Dashboard

---

### INTEGRATIONS / ACTIONS

- You can find a DASHBOARD of tests runs here : https://cloud.cypress.io/projects/cuszxx/runs

---

### Files :

- `.feature` files : Gherkin steps
- `.js`files : Step definitions of gherkin steps
- `pages/` folder : Page Object Model helpers for each page or component (locators, functions)

---

### In scope :

Advanced search non-regression test for a trainer :

- Access to the website
- Access to the advanced research
- Checking the presence of search filters
- Advanced research by type
- Advanced research by weakness
- Advanced research by type and weakness
- Advanced research with no criteria
