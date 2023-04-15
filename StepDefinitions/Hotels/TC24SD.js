const { Given, When, Then,  } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require('../../Pages/Hotels/Homepage');
const FeedbackPage = require('../../Pages/Hotels/FeedbackPage');

const homepage = new Homepage();
const feedbackpage = new FeedbackPage();


Then(/^Select any star-rating$/, async function () {
    await feedbackpage.selectRating();
})

Then(/^Enter any comments$/, async function () {
    await feedbackpage.enterComment();
})

Then(/^Click on Submit button$/, async function () {
    await feedbackpage.clickSubmitButton();
})

Then(/^Select any option for “How likely are you to return to Hotels.com”$/, async function () {
    await feedbackpage.selectWillYouReturn();
}); 

Then(/^Select any answer for “Prior to this visit, have you ever booked on Hotels.com”$/, async function () {
    await feedbackpage.clickBeforeBooked();

})

Then(/^Select any answer for ”Did you accomplish what you wanted to do on this page”$/, async function () {
    await feedbackpage.clickWereSuccessFul();
}); 

Then(/^Verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed$/, async function () {
    await feedbackpage.verifyThankYouMsgDisplayed();
}); 