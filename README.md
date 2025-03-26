Cypress TypeScript Project with Cucumber BDD and HTML Reporting

# Project Overview:

This project is a Cypress automation framework using TypeScript and Cucumber for Behavior-Driven Development (BDD). It includes support for generating detailed HTML reports with multiple-cucumber-html-reporter.

It Follows Page Object Model where Every page in the Front End will have a Typescript class with the Locators and Methods related to that page. Step Definitions class acts as an interface to feature files and page Objects Feature Files will have test scenarios in BDD model for wider audience.

PreRequisites: --> install Node latest version

## Plugins
  **Cypress-Cucumber-PreProcessor** and **Multiple-Cucumber-HTML-Reporter**

## Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/mailtoach79/CypressE2EWithTypescript.git

cd cypress_typescript

2️⃣ Install Dependencies

npm install

Running Tests:
Run Cypress in Interactive Mode

npm run cypress:open

Run Cypress in Headless Mode

npm run cypress:run

# Generating HTML Reports:

1️) Run Cypress Tests

Ensure test execution generates JSON reports.

npm run cypress:run

2️) Generate HTML Report

npm run generate-report

The Report will be Generated in cypress/Reports Folder.

Sample Report:

![image](https://github.com/user-attachments/assets/8833e6f6-1914-4e62-bcc4-76304c2402a3)


Run Tests in parallel (Feature File wise)
node run-parallel.js

Run Tests based on Cucumber Tags or Feature Files
npx cypress run --env tags="@Test" **npx cypress run --spec /Registration.feature
