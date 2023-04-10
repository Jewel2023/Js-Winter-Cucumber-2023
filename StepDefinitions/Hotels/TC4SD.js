const { Given, When, Then,  } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require('../../Pages/Hotels/Homepage');

const homepage = new Homepage();

Then(/^Select “Adults as 6$/, async function () {
    await homepage.adultPlusButton(4);
})

Then(/^Select “Children” as 3$/, async function () {
    await homepage.plusButton(3);
    
})

Then(/^Select first child age: 4$/, async function () {
    await homepage.selectAgeOne();
   
});

Then(/^Select second child age: Under 1$/, async function () {
    await homepage.selectAgeTwo();

});

Then(/^Select third child age: 7$/, async function () {
    await homepage.selectAgeThree();

})

Then(/^Click Done$/, async function () {
    await homepage.clickDone();
   
});

Then(/^Verify total number of Travelers is sum of adults and children as same as selected on step 3 and 4$/, async function () {
    
    
})
