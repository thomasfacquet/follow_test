const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "cuszxx",
  e2e: {
    chromeWebSecurity: true,
    video: false,
    baseUrl: "https://www.pokemon.com/fr/pokedex",
  },
});
