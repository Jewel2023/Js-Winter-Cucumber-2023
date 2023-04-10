const { Given, When, Then,  } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require('../../Pages/Hotels/Homepage');
const FeedbackPage = require('../../Pages/Hotels/FeedbackPage');
const { Browser } = require("selenium-webdriver");

const homepage = new Homepage();
const feedbackpage = new FeedbackPage();


Then(/^Click on SignIn$/, async function () {
    await homepage.clickSignIn();
})

Then(/^Click “Feedback”$/, async function () {
    await homepage.clickFeedback();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
})

Then(/^Click on Submit button$/, async function () {
    await feedbackpage.clickSubmitButton();
})

Then(/^Verify error message is displayed$/, async function () {
    await feedbackpage.verifyErrorMsgDisplayed();
}); 

Then(/^Verify red-dotted line is displayed around star-section$/, async function () {
    await feedbackpage.verifyRedDottedLineDisplayed();

})