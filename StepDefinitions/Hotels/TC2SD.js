const { Given, When, Then,  } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require('../../Pages/Hotels/Homepage');
const SignupPage = require('../../Pages/Hotels/SignupPage')
const TermAndConditionPage = require('../../Pages/Hotels/TermAndConditionPage')
const PrivacyStatementPage = require('../../Pages/Hotels/PrivacyStatementPage')


const homepage = new Homepage();
const signuppage  = new SignupPage();
const termandconditionpage = new TermAndConditionPage();
const privacystatementpage = new PrivacyStatementPage();



Then(/^Click Terms and Conditions link$/, async function () {
    await signuppage.clickTermAndConditionLink();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
})

Then(/^Verify Terms and Conditions page opens in new tab$/, async function () {
    await termandconditionpage.termAndConditionPageOpened();
})

Then(/^Verify Last revised date format$/, async function () {
   
    await termandconditionpage.verifyLastRevisedDate();
    await homepage.clickSignIn();
    await homepage.clickSignUpLink();
   
});

Then(/^Click Privacy Statement link$/, async function () {
    await signuppage.clickPrivacyStatementLink();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
});

Then(/^Verify Privacy Statement page opens in new tab$/, async function () {
    await privacystatementpage.privacyStatementPageOpened();
});

Then(/^Verify Last Updated date format$/, async function () {
    await privacystatementpage.verifyLastUpdatedDate();
});
