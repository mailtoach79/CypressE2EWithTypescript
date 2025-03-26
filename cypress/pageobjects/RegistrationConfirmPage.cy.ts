export class registerConfirmPage {

    weblocators = {
        accountCreatMessage: 'h1'
    }

    // public accountSuccessMessage1(): string {
    //     cy.get(this.weblocators.accountCreatMessage).then(($element) => {
    //       const message: string = $element.text();
    //       console.log("Element Text:: " + message);
    //       return message; // Return the message correctly
    //     });
    //     return '';
    //   }

    accountSuccessMessage():object {
        // cy.get(this.weblocators.accountCreatMessage).should('have.value', 'Your Account Has Been Created!');
        return cy.get(this.weblocators.accountCreatMessage);
    }

}