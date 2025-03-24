export {}

declare global {
  namespace Cypress {
    interface Chainable {
      LoginToApplication(email: string, password: string): Chainable<void>
    }
  }
}

Cypress.Commands.add('LoginToApplication', (username, password) => {

    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    // Type username and password, and submit the form
    cy.get('#input-email').type(username);
    cy.get('#input-password').type(password);
    cy.get('form > .btn').click();
});