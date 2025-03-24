export class registerPage {

    weblocators = {
        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        continue: '.btn.btn-primary'
    }

    enterFirstName(FName: string) {
        cy.get(this.weblocators.firstName).type(FName)
    }
    enterlastName(LName: string) {

        cy.get(this.weblocators.lastName).type(LName)
    }
    enterEmail(email: string) {
        cy.get(this.weblocators.email).type(email)
    }
    enterTelephone(phoneNo: string) {
        cy.get(this.weblocators.telephone).type(phoneNo)
    }
    enterPassword(password: string) {
        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.passwordConfirm).type(password)

    }
    selectCheckbox() {
        cy.get(this.weblocators.policyCheckbox).check()
    }
    clickOnContinue() {
        cy.get(this.weblocators.continue).click()
    }

}