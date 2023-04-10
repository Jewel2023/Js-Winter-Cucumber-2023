@regression @tc28
Feature: Child-age dropdowns are same as number of Children selected
Scenario: Verify Child-age dropdowns are same as number of Children selected
        When Launch Hotels
        And Click on Travelers
        And Select “Children” as 2
            Then Verify Children-age dropdown are 2
            Then Verify Plus-button is enabled
            Then Verify minus-button is enabled
        And Select “Children” as 6
            Then Verify Children-age dropdown are 6
            Then Verify Plus button is disabled
            Then Verify minus-button is enabled
        And Select “Children” as 5
            Then Verify Children-age dropdown are 5
            Then Verify Plus button is enabled
            Then Verify minus-button is enabled
        And Select “Children” as 0
            Then Verify Children-age dropdown is NOT displayed
            Then Verify Plus button is enabled
            Then Verify minus-button is disabled
