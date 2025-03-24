/// <reference types='cypress' />

describe('Setup check', ()=>{
    it('My first test', ()=>{
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    })
})