class Termandconditionpage {
    // -------------------------------------------------------TC2 Locators------------------------------------------------------------

    title = "//h1[@id='_TERMS_OF_SERVICE']";
    lastRevisedDate = "//span[contains(text(),'Last revised: 01/01/23')]";

    // ------------------------------------------------------TC2 Methods-------------------------------------------------------------

    async termAndConditionPageOpened() {
        return await $(this.title).isDisplayed();
    }

    async verifyLastRevisedDate() {
        const lastRevisedDate = await $(this.lastRevisedDate).getText();
        const a = lastRevisedDate.split(": ")

        const dateFormat = /^\d{2}\/\d{2}\/\d{2}$/;

        const dateString = a[1];

        return !!(dateFormat.test(dateString));

    }

    // -----------------------------------------------------------------------------------------------------------------------------

}
module.exports = Termandconditionpage;
