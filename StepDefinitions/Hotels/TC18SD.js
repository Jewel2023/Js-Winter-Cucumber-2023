const { Given, When, Then,  } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require('../../Pages/Hotels/Homepage');
const SignupPage = require('../../Pages/Hotels/SignupPage')

const homepage = new Homepage();
const signuppage  = new SignupPage();

When(/^Launch Hotels$/, async function () {
    await browser.url('https://www.hotels.com/');
});

Then(/^Click on SignIn link$/, async function () {
    await homepage.clickSignIn();
})

Then(/^Click on SignUp link$/, async function () {
    await homepage.clickSignUpLink();
})

Then(/^Enter invalid email address/, async function () {
    await signuppage.enterEmailAddress();
})

Then(/^Click Continue button$/, async function () {
    try{
    await signuppage.clickContinueButton();
    }
    catch{}
})

Then(/^Verify error is displayed Enter a valid email address$/, async function () {
     await signuppage.isErrorDisplayed();
}); 

Then(/^Verify “Continue” button is enabled$/, async function () {
     await signuppage.isContinueButtonEnable();
});
