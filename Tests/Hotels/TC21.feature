@regression @tc21
Feature: SignIn

  Scenario: Verify Verification message for invalid sign in credentials
    When I Lunch hotels.com homepage
    Then I Click on Sign In link
    Then I Click on Sign in button
    Then I Enter Invalid Email Address
    Then I Click on Continue Button
    Then I Verify Invalid error message is displayed
