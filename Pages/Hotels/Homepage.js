const { By } = require('selenium-webdriver');
class Homepage {
    

    #hotelsLogoLocator = '//a[contains(@class , "header-logo")]';

    // Destination Locators
    #destinationButtonLocator = 'button[data-stid=destination_form_field-menu-trigger]';
    #destinationInputLocator = '#destination_form_field';
    #destinationAutoSuggestionLocator = '//li[contains(@class, "has-subtext")]//button';

    // Calendar Locators
    #calendarButtonLocator = 'div[class*=uitk-date-picker-menu]'
    #calendarDoneButtonLocator = 'button[data-stid=apply-date-picker]';
    #previousMonthArrowLocator = '(//button[@data-stid="date-picker-paging"])[1]';
    #nextMonthArrowLocator = '(//button[@data-stid="date-picker-paging"])[2]';
    #leftMonthHeadingLocator = '(//div[@data-stid="date-picker-month"])[1]//h2';
    #calendarDatesLocatorStarts = '//h2[text()="';
    #calendarDatesLocatorEnds = '"]/following-sibling::table//button';

    // Travelers Locators
    #travelersButtonLocator = 'button[data-stid=open-room-picker]';
    #travelersHeadingLocator = 'h3=Travelers';
        // Adults Locators
    #roomAdultsMinusLocatorStarts = '((//h3[text()="';
    #roomAdultsMinusLocatorEnds = '"]/following-sibling::div)[1]//button)[1]';
    #roomAdultsPlusLocatorStarts = '((//h3[text()="';
    #roomAdultsPlusLocatorEnds = '"]/following-sibling::div)[1]//button)[2]';
    #roomAdultsCountLocatorStarts = '(//h3[text()="';
    #roomAdultsCountLocatorEnds = '"]/following-sibling::div)[1]//input';
        // Children Locators
    #roomChildrenMinusLocatorStarts = '((//h3[text()="';
    #roomChildrenMinusLocatorEnds = '"]/following-sibling::div)[2]//button)[1]';
    #roomChildrenPlusLocatorStarts = '((//h3[text()="';
    #roomChildrenPlusLocatorEnds = '"]/following-sibling::div)[2]//button)[2]';
    #roomChildrenCountLocatorStarts = '(//h3[text()="';
    #roomChildrenCountLocatorEnds = '"]/following-sibling::div)[2]//input';
        // ChildrenAge Locators
    allChildrenAgeDropdownLocator = '//select[starts-with(@id, "age-traveler_selector_children_age_selector")]';
    childAgeDropdownLocatorStarts = '//label[text()="';
    childAgeDropdownLocatorEnds = '"]/following-sibling::select';
        // Travelers Misc Locators
    #travelersDoneButtonLocator = '#traveler_selector_done_button';
    #anotherRoomLocator = '#traveler_selector_add_room';

    #searchButtonLocator = '#search_button';

    // ------------------------------------------------------- Locators------------------------------------------------------------

    #signIn = "//button[normalize-space()='Sign in']";
    #signUpLink = "//a[contains(text(),'Sign up, it’s free')]";
    #feedback = "//a[contains(.,'Feedback')]";
    #traveller = "//div[@class='uitk-field has-floatedLabel-label has-icon has-placeholder']";
    #plusButton = "(//button[@type='button'])[12]";
    #parentDiv = "//div[@class='uitk-layout-flex uitk-layout-flex-flex-wrap-wrap']";
    #minsButton = "(//button[@type='button'])[11]";
    #adultPlusButton = "(//button[@type='button'])[10]";
    #fisrtChild = "(//select[@id='age-traveler_selector_children_age_selector-0-0'])[1]";
    #secChild = "(//select[@id='age-traveler_selector_children_age_selector-0-1'])[1]";
    #thirdChild = "(//select[@id='age-traveler_selector_children_age_selector-0-2'])[1]";
    #trevellerDone = "//button[@id='traveler_selector_done_button']";

    // ------------------------------------------------------ Methods-------------------------------------------------------------
    
    async clickSignIn() {
        await $(this.#signIn).click();
        
    }

    async clickSignUpLink() {
        await $(this.#signUpLink).click();
        
    }

    async clickFeedback() {
        await $(this.#feedback).click();
        
    }

    async clickTraveller() {
        await $(this.#traveller).click();
        
    }

    async plusButton(val){
        for (let i = 0; i < val; i++) {
            await $(this.#plusButton).click();
          }
        
    }

    async adultPlusButton(val){
        for (let i = 0; i < val; i++) {
            await $(this.#adultPlusButton).click();
          }
        
    }

    async minsButton(val){
        for (let i = 0; i < val; i++) {
            await $(this.#minsButton).click();
          }
        
    }

    async verifyChildernAgeDropDown(val){
        const parentDiv = driver.findElement(By.xpath(this.#parentDiv));

  // Find all the child div elements inside the parent div
  const childDivs = parentDiv.findElements(By.tagName('div'));
    }
    
    async plusButtonIsEnabled(){
        await $(this.#plusButton).isEnabled();
    }

    async minsButtonIsEnabled(){
        await $(this.#minsButton).isEnabled();
    }
    

    async selectAgeOne(){
        const dropdown = await $(this.#fisrtChild);
        await dropdown.selectByVisibleText("4");
    }

    async selectAgeTwo(){
        const dropdown = await $(this.#secChild);
        await dropdown.selectByVisibleText('Under 1');
    }

    async selectAgeThree(){
        const dropdown = await $(this.#thirdChild);
        await dropdown.selectByVisibleText('7');
    }

    async clickDone(){
        await $(this.#trevellerDone).click();
    }

    async verifyTravellerNo(){
        const traveller = await $(this.traveller).getText();
        const a = traveller.split(" ")
        return a[0] == '9'
    }
    
    // -----------------------------------------------------------------------------------------------------------------------------

    async isHotelsLogoDisplayed() {
        await $(this.#hotelsLogoLocator).waitForDisplayed();
        await $(this.#hotelsLogoLocator).isDisplayed();
    }

    // Destination functions
    async enterDestination(destination) {
        await $(this.#destinationButtonLocator).click();
        await $(this.#destinationInputLocator).waitForDisplayed();
        await $(this.#destinationInputLocator).setValue(destination);
    }

    async selectDestinationFromAutoSuggestion(destinationToSelect) {
        const allSuggestions = await $$(this.#destinationAutoSuggestionLocator);

        for (const suggestion of allSuggestions) {
            const text = await suggestion.getAttribute('aria-label');
            if(text.toLowerCase().startsWith(destinationToSelect.toLowerCase())) {
                await suggestion.click();
                break;
            }
        }
    }

    // // Calendar functions
    async selectDate(date) {
        const isDoneBtnDisplayed = await $(this.#calendarDoneButtonLocator).isDisplayed();
        if (isDoneBtnDisplayed) {
            await $(this.#calendarButtonLocator).click();
            await $(this.#calendarDoneButtonLocator).waitForDisplayed();
        }
        const dateValuesInArray = date.split();
        const monthYear = dateValuesInArray[1] + ' ' + dateValuesInArray[2];
        await this.goToDesiredCalendar(monthYear);
        const allDates = await $$(this.#calendarDatesLocatorStarts + monthYear + this.#calendarDatesLocatorEnds);
        for (const dateElement of allDates) {
            const dateValue = await dateElement.getAttribute('data-day');
            if (dateValue.localeCompare(dateValuesInArray[0]) === 0) {
                await dateElement.click()
                break;
            }
        }
    }

    async goToDesiredCalendar(monthYear) {
        const isPreviousMonthArrowEnabled = await $(this.#previousMonthArrowLocator).isEnabled();
        for (let i=1; i<=12 ; i++) {
            const monthHeading = await $(this.#leftMonthHeadingLocator).getText();
            if(monthHeading.toLowerCase().localeCompare(monthYear.toLowerCase()) !== 0) {
                if(i === 1 && isPreviousMonthArrowEnabled) {
                    await $(this.#previousMonthArrowLocator).click();
                } else {
                    await $(this.#nextMonthArrowLocator).click();
                }
            } else {
                break;
            }
        }
    }
 
    async clickCalendarDoneButton() {
        await $(this.#calendarDoneButtonLocator).click();
    }


    // Travelers functions
    async getTravelersCount() {
        await $(this.#travelersButtonLocator).getText();
    }

    async selectAdultsInRoom(adultCount, roomNumber) {
        const isDoneBtnDisplayed = await $(this.#travelersDoneButtonLocator).isDisplayed();
        if (isDoneBtnDisplayed) {
            await $(this.#travelersButtonLocator).click();
            await $(this.#travelersHeadingLocator).waitForDisplayed();
        }
        for (let i=0 ; i<=12 ; i++) {
            const adultCountOnWeb = await $(this.#roomAdultsCountLocatorStarts+roomNumber+this.#roomAdultsCountLocatorEnds).getAttribute('value');
            if (adultCountOnWeb < adultCount) {
                await $(this.#roomAdultsPlusLocatorStarts+roomNumber+this.#roomAdultsPlusLocatorEnds).click();
            } else if (adultCountOnWeb > adultCount) {
                await $(this.#roomAdultsMinusLocatorStarts+roomNumber+this.#roomAdultsMinusLocatorEnds).click();
            } else {
                break;
            }
        }
    }

    async selectChildrenInRoom(childrenCount, roomNumber) {
        const isDoneBtnDisplayed = await $(this.#travelersDoneButtonLocator).isDisplayed();
        if (isDoneBtnDisplayed) {
            await $(this.#travelersButtonLocator).click();
            await $(this.#travelersHeadingLocator).waitForDisplayed();
        }
        for (let i=0 ; i<=12 ; i++) {
            const childrenCountOnWeb = await $(this.#roomChildrenCountLocatorStarts+roomNumber+this.#roomChildrenCountLocatorEnds).getAttribute('value');
            if (childrenCountOnWeb < adultCount) {
                await $(this.#roomChildrenPlusLocatorStarts+roomNumber+this.#roomChildrenPlusLocatorEnds).click();
            } else if (childrenCountOnWeb > childrenCount) {
                await $(this.#roomChildrenMinusLocatorStarts+roomNumber+this.#roomChildrenMinusLocatorEnds).click();
            } else {
                break;
            }
        }
    }

    async childrenAgeDropdownCount() {
        const allChildrenAgeDropdownArray = await $$(this.allChildrenAgeDropdownLocator);
        return allChildrenAgeDropdownArray.length;
    }

    async selectChildAge(childNum, childAgeToSelect) {
        const childAgeDropdownLocator = this.childAgeDropdownLocatorStarts + childNum + this.childAgeDropdownLocatorEnds;
        const childAgeDropdown = await $(childAgeDropdownLocator);
        await childAgeDropdown.selectByVisibleText(childAgeToSelect);
    }

    async clickTravelersDoneButton() {
        await $(this.#travelersDoneButtonLocator).click();
    }

    async clickSearchButton() {
        await $(this.#searchButtonLocator).click();
    }


}
module.exports = Homepage;
