@regression @tc18
Feature: User can update number of guests on Home page
Scenario: Verify user can update number of guests on Home page
        When Launch Hotels
        And Click on Travelers
        And Select “Adults as 6
        And Select “Children” as 3 
        And Select first child age: 4
        And Select second child age: Under 1
        And Select third child age: 7
        And Click Done
        And Verify total number of Travelers is sum of adults and children as same as selected on step 3 and 4