/// <reference types='cypress' />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { homePage } from '../../pageobjects/HomePage.cy';
import testdata from '../../../cypress/fixtures/testData.json';

const objHomePage = new homePage();
Given('login to the application', () => {
    cy.LoginToApplication(testdata.login.username, testdata.login.password);
});

When('user search and add the item to the cart', () => {
    objHomePage.searchProduct(testdata.product.productName);
    objHomePage.addToCart();
});

Then('addtocart item should contain the search item', () => {
    objHomePage.verifySucessMessage().then(($element) => {
        cy.log('Element Text is ::' + $element.text())
        expect($element.text()).contains(testdata.message.successMessage);
    })
});
