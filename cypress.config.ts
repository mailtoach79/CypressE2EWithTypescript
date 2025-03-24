import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({

  e2e: {
    async setupNodeEvents(on, config) {

      // Set up the Cucumber preprocessor
      await addCucumberPreprocessorPlugin(on, config);

      // Configure the ESBuild bundler to handle feature files correctly
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config; // Return the modified configuration
    },

    // Path to the feature files
    specPattern: "cypress/e2e/**/*.feature",

    // Other optional configurations
    baseUrl: "https://naveenautomationlabs.com/opencart/index.php?route=account/login", // Example base URL
    supportFile: 'cypress/support/generalCommands.ts'
  },
});
