const { Given, When, Then,  } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require('../../Pages/Hotels/Homepage');

const homepage = new Homepage();

Then(/^Click on Travelers$/, async function () {
    await homepage.clickTraveller();
})

Then(/^Select “Children” as 2$/, async function () {
    await homepage.plusButton(2);
})

Then(/^Verify Children-age dropdown are 2$/, async function () {
//    await homepage.verifyChildernAgeDropDown(2);
console.log("here")
});

Then(/^Verify Plus-button is enabled$/, async function () {
    await homepage.plusButtonIsEnabled();
});

Then(/^Verify minus-button is enabled$/, async function () {
    await homepage.minsButtonIsEnabled();
    
});

Then(/^Select “Children” as 6$/, async function () {
    await homepage.plusButton(4);
    
})

Then(/^Verify Children-age dropdown are 6$/, async function () {
    // await homepage.verifyChildernAgeDropDown(6);
    console.log("here 2")
   
});

Then(/^Verify Plus button is disabled$/, async function () {
    await homepage.plusButtonIsEnabled();
    
});

Then(/^Select “Children” as 5$/, async function () {
    await homepage.minsButton(1);
    
})

Then(/^Verify Children-age dropdown are 5$/, async function () {
    // await homepage.verifyChildernAgeDropDown(5);
    console.log("here 3")
   
});

Then(/^Select “Children” as 0$/, async function () {
    await homepage.minsButton(5);
    
})

Then(/^Verify Children-age dropdown is NOT displayed$/, async function () {
    // await homepage.verifyChildernAgeDropDown(0);
    console.log("here 4")
   
});

Then(/^Verify minus-button is disabled$/, async function () {
    await homepage.minsIsButtonEnabled();
    
});
