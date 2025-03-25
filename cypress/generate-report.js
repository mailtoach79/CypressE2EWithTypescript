const report = require("multiple-cucumber-html-reporter");
const fs = require("fs");

const jsonReportDir = "cypress/cucumber-json";
const mergedJsonReportDir = "cypress/final-json";

// Ensure directory exists
if (!fs.existsSync(jsonReportDir)) {
  console.error(`JSON report directory '${jsonReportDir}' not found. Run Cypress tests first.`);
  process.exit(1);
}

// Merge JSON files into one report
const mergedReportPath = `${mergedJsonReportDir}/merged-report.json`;
const jsonFiles = fs.readdirSync(jsonReportDir).filter(file => file.endsWith(".json"));

 if (!fs.existsSync(mergedJsonReportDir)) {
            fs.mkdirSync(mergedJsonReportDir, { recursive: true });
          }

const mergedData = jsonFiles.flatMap(file => {
  const content = fs.readFileSync(`${jsonReportDir}/${file}`, "utf-8");
  return JSON.parse(content);
});

fs.writeFileSync(mergedReportPath, JSON.stringify(mergedData, null, 2));

// Generate the HTML report
report.generate({
  jsonDir: mergedJsonReportDir,
  reportPath: "cypress/reports/html",
  metadata: {
    browser: {
      name: "chrome",
      version: "latest",
    },
    device: "Cypress",
    platform: {
      name: "Mac",
      version: "15",
    },
  },
  screenshots: {
    enable: true,
    locations: "cypress/screenshots",
  },
});

console.log("Cucumber HTML report generated successfully!");