import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import * as fs from "fs";
import * as path from "path";

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

      // Generate valid Cucumber JSON report after tests
      on("after:run", async (results) => {
        if (results && results.runs.length > 0) {
          const jsonDir = "cypress/cucumber-json/";

          if (!fs.existsSync(jsonDir)) {
            fs.mkdirSync(jsonDir, { recursive: true });
          }
          results.runs.forEach((run) => {
            const featureName = path.basename(run.spec.relative, ".feature");
            const reportFile = `${jsonDir}/${featureName}.json`;

            const cucumberResults = results.runs.map((run) => ({
              keyword: "Feature",
              name: run.spec.name || "Unnamed Feature",
              uri: run.spec.relative || "Unknown URI",
              elements: run.tests.map((test) => ({
                keyword: "Scenario",
                name: test.title || "Unnamed Scenario",
                steps: test.attempts.map((attempt) => ({
                  keyword: attempt.title || "Step",
                  name: attempt.title || "Step",
                  result: { status: attempt.state || "unknown" },
                })),
              })),
            }));

            fs.writeFileSync(`${reportFile}`, JSON.stringify(cucumberResults, null, 2));
            console.log(`Cucumber JSON report generated at: ${reportFile}`);
          });
        } else {
          console.warn("No test runs found. Cypress might have failed before execution.");
        }
      });

      return config; // Return the modified configuration
    },

    // Path to the feature files
    specPattern: "cypress/e2e/**/*.feature",

    // Other optional configurations
    baseUrl: "https://naveenautomationlabs.com/opencart/index.php?route=account/login", // Example base URL
    supportFile: 'cypress/support/generalCommands.ts',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots'
  },
});
