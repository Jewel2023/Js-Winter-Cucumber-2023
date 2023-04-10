class Privacystatementpage {
    // -------------------------------------------------------TC2 Locators------------------------------------------------------------

    #title = "//h1[@class='uitk-heading uitk-heading-4']";
    #lastUpdatedDate = "//p[normalize-space()='Last Updated: 10/03/2023']";

    // ------------------------------------------------------TC2 Methods-------------------------------------------------------------
    
    async privacyStatementPageOpened(){
        return await $(this.#title).isDisplayed();
    }

    async verifyLastUpdatedDate() {
        const lastUpdatedDate = await $(this.#lastUpdatedDate).getText();
        const a = lastUpdatedDate.split(": ")

        const dateFormat = /^\d{2}\s[A-Za-z]+\,\s\d{4}$/;

        const dateString = a[1];

        return !!(dateFormat.test(dateString));

    }

    // -----------------------------------------------------------------------------------------------------------------------------

}
module.exports = Privacystatementpage;
