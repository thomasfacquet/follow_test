const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  allureWriter(on, config);
  return config;
}

// Make sure to return the config object as it might have been modified by the plugin.

module.exports = defineConfig({
  projectId: "cuszxx",
  watchForFileChanges: false,
  screenshotsFolder: "output/screenshots",
  videosFolder: "output/videos",
  video: false,
  viewportWidth: 1280,
  viewportHeight: 800,
  chromeWebSecurity: false,
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 12000,
  retries: {
    runMode: 2,
    openMode: 1,
  },
  e2e: {
    chromeWebSecurity: true,
    video: false,
    baseUrl: "https://www.pokemon.com/fr/pokedex",
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
});
