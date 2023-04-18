@regression @tc31
Feature: Verify language can be changed successfully

  Scenario: Verify language can be changed successfully
    When I Lunch hotels.com homepage
    Then I Click on “English“ language
    When I Select “Español” in Language dropdown
    Then I Click on “Save“ button
    Then I Verify “Español” is displayed
    Then I Click on “Español“ language
    Then I Select “English” in Language dropdown
    Then I Click on “Guardar“ button
    Then I Verify “English” is displayed
