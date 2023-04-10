class SignupPage {
    // -------------------------------------------------------TC1 Locators------------------------------------------------------------

    #emailAddress = "//input[@id='signupFormEmailInput']";
    #continueButton = "//button[@id='signupFormSubmitButton']";
    #errorMsg = "//div[@id='signupFormEmailInput-error']";
    #termAndConditionLink = "//a[normalize-space()='Terms and Conditions']";
    #privacyStatementLink = "//a[normalize-space()='Privacy Statement']";

    // ------------------------------------------------------TC1 Methods-------------------------------------------------------------
    
    async enterEmailAddress(){
        await $(this.#emailAddress).setValue("tsting@.com")
    }

    async clickContinueButton() {
        await $(this.#continueButton).click();
        
    }

    async isErrorDisplayed(){
        return await $(this.#errorMsg).isDisplayed();
    }

    async isContinueButtonEnable(){
        return await $(this.#continueButton).isEnabled();
    }

    async clickTermAndConditionLink() {
       await $(this.#termAndConditionLink).click();
        
    }

    async clickPrivacyStatementLink() {
        await $(this.#privacyStatementLink).click();
        
    }
    

    // -----------------------------------------------------------------------------------------------------------------------------

}
module.exports = SignupPage;
