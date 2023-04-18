@regression @tc29
Feature: List your Property

  Scenario: Verify "List your Property" flow
    When I Lunch hotels.com homepage
    Then I Click on “List your property”
    Then I Verify “What would you like to list” is displayed
    And I Verify “Lodging“ and “Private residence“ options are displayed
    Then I Click on “Private residence“
    Then I Verify ”Step 1 of 3” is displayed
    And I Verify “See how much you could earn!” is displayed
    Then I Enter “4“ as bedroom
    Then I Enter “2.5“ as bathroom
    Then I Click on “Next” button
    Then I Verify ”Step 2 of 3” is displayed
    And I Verify “Where is your property located” is displayed
    Then I Enter “121” in address
    Then I Select “1211 6th Avenue, New York, NY, USA” from auto-suggestion
    Then I Verify graph is displayed
    And I Verify pin in graph is displayed
    And I Verify “Move the pin to adjust the location of your property.“ is displayed below graph
