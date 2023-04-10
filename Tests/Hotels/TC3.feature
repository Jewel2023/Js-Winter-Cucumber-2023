@regression @tc3
Feature: Travelers
Scenario: Verify Travelers Feature
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
