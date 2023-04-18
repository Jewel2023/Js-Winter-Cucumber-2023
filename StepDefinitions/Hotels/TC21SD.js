const { Given, When, Then,  } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require('../../Pages/Hotels/Homepage');
const PropertyInfo = require("../../Pages/Hotels/PropertyInfo");
const SignInPage = require("../../Pages/Hotels/SignInPage");

const homepage = new Homepage();
const propertyinfo = new PropertyInfo();
const signinpage = new SignInPage();


When(/^I Lunch hotels.com homepage$/, async function () {

    await browser.url('https://www.hotels.com/');
});

When(/^I Click on Sign In link$/, async function () {

    await signinpage.clickSignInLink();
    await signuppage.waitForSignInMenu();
});

When(/^I Click on Sign in button$/, async function () {

    await signuppage.clickSignInButton();
});

When(/^I Enter Invalid Email Address$/, async function () {

    await signuppage.enterInvalidEmailInSignIn('@675!!');
});

When(/^I Click on Continue Button$/, async function () {

    await signuppage.clickContinueButtonInSignIn();
});

When(/^I Verify Invalid error message is displayed$/, async function () {

    const isInvalidEmailErrorDisplayed = await signuppage.isInvalidEmailErrorDisplayed();
    expect(isInvalidEmailErrorDisplayed, 'Invalid Emaill Error NOT Displayed').to.be.true;

});