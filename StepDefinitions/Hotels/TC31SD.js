const { Given, When, Then,  } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require('../../Pages/Hotels/Homepage');
const PropertyInfo = require("../../Pages/Hotels/PropertyInfo");
const SignInPage = require("../../Pages/Hotels/SignInPage");

const homepage = new Homepage();
const propertyinfo = new PropertyInfo();
const signinpage = new SignInPage();








When(/^I Click on “English“ language$/, async function () {

    await homepage.clickOnEnglishLanguage();
});

When(/^I Select “Español” in Language dropdown$/, async function () {
    await homepage.chooseLanguage(1);
});

When(/^I Click on “Save“ button$/, async function () {

    await homepage.clickLanguageMenuSaveButton();
});

When(/^I Verify “Español” is displayed$/, async function () {

    const isEspanolDisplayed = await homepage.isEspanolDisplayed();
    expect(isEspanolDisplayed, 'English Is NOT Displayed').to.be, true;
});

When(/^I Click on “Español“ language$/, async function () {

    await homepage.clickOnEspanolLanguage();
});

When(/^I Select “English” in Language dropdown$/, async function () {

    await homepage.chooseLanguage(0);
});

When(/^I Click on “Guardar“ button$/, async function () {

    await homepage.clickLanguageMenuGuardarButton();
});

When(/^I Verify “English” is displayed$/, async function () {

    const isEnglishDisplayed = await homepage.isEnglishDisplayed();
    expect(isEnglishDisplayed, 'English Is NOT Displayed').to.be, true;
});