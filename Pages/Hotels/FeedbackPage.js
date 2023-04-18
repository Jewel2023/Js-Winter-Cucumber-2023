class Feedbackpage {
    // -------------------------------------------------------TC1 Locators------------------------------------------------------------

    submit = "(//button[normalize-space()='Submit'])[1]";
    errorMsg = "//p[@data-localization='validation-heading']";
    redDotLine = "//fieldset[@id='required_box_page_rating']";
    rating = "//label[@for='page-rating-1']";
    comment = "//textarea[@id='verbatim']";
    willYouReturn = "//select[@id='will-you-return']";
    bookedBefore = "//span[@data-localization='booked-before-yes']";
    wereYouSuccessful = "//span[@data-localization='were-you-successful-yes']";  
    ThanksMsg = "//h5[normalize-space()='THANK YOU FOR YOUR FEEDBACK.']"; 


    // ------------------------------------------------------TC1 Methods-------------------------------------------------------------
    
    async clickSubmitButton(){
        
        await $(this.submit).click();
        
    }
    async clickWereSuccessFul(){
        
        await $(this.wereYouSuccessful).click();
        
    }
    async clickBeforeBooked(){
        
        await $(this.bookedBefore).click();
        
    }

    async selectWillYouReturn(){
        const dropdown = await $(this.willYouReturn);
        await dropdown.selectByVisibleText('Somewhat likely');
    }

    async selectRating(){
        await $(this.rating).click();
    }

    async  enterComment(){
        await $(this.comment).setValue("Very Good");
    }
    async verifyErrorMsgDisplayed(){
        return await $(this.errorMsg).isDisplayed();

    }

    async verifyThankYouMsgDisplayed(){
        return await $(this.ThanksMsg).isDisplayed();

    }

    async verifyRedDottedLineDisplayed(){
        const fieldset=  await $(this.redDotLine);
        return await fieldset.getCSSProperty('border-color');
        
    }
    

    // -----------------------------------------------------------------------------------------------------------------------------

}
module.exports = Feedbackpage;
