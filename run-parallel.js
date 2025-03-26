const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

// Feature files list
const featureFiles = [
  "cypress/e2e/Registration.feature",
  "cypress/e2e/AddToCart.feature"
];

// Ensure JSON report directory exists
const jsonReportDir = "cypress/cucumber-json";
if (!fs.existsSync(jsonReportDir)) {
  fs.mkdirSync(jsonReportDir, { recursive: true });
}

// Function to execute Cypress tests in parallel
const runTest = (file) => {
  return new Promise((resolve) => {
    const jsonOutputPath = `${jsonReportDir}/${path.basename(file, ".feature")}.json`;
    const command = `npx cypress run --spec "${file}" --reporter json --reporter-options "output=${jsonOutputPath}"`;

    console.log(`Running: ${command}`);

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error running ${file}: ${error.message}`);
      } else {
        console.log(`Finished Test Execution: ${file} → JSON Report: ${jsonOutputPath}`);
      }
      resolve();
    });
  });
};

// Run all tests in parallel
Promise.all(featureFiles.map(runTest)).then(() => {
  console.log("All tests executed in parallel. JSON reports saved in cypress/cucumber-json/");
});