/// <reference types='cypress' />

import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import { registerPage } from '../../pageobjects/RegistrationPage.cy';
import testdata from '../../../cypress/fixtures/registerData.json';
import { registerConfirmPage } from '../../pageobjects/RegistrationConfirmPage.cy';

const objRegisterPage = new registerPage();
const objRegisterConfirmPage = new registerConfirmPage();

Given('user navigates to the application', () => {
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
});

When('user enters registration details', ()=> {
    objRegisterPage.enterEmail(testdata.email);
    objRegisterPage.enterFirstName(testdata.firstName);
    objRegisterPage.enterlastName(testdata.lastName);
    objRegisterPage.enterTelephone(testdata.telephone);
    objRegisterPage.enterPassword(testdata.password);
    objRegisterPage.selectCheckbox();
    objRegisterPage.clickOnContinue();
});

Then('user should be registered to the application successfully', ()=> {
    // expect(objRegisterConfirmPage.accountSuccessMessage()).to.equal('Your Account Has Been Created!');
    objRegisterConfirmPage.accountSuccessMessage().then(($element)=>{
        cy.log('Element Text is ::' + $element.text());
        expect($element.text()).contains('Your Account Has Been Created!');
    })
});
