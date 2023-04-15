@regression @tc22
Feature: SignUp
Scenario: Verify error message for invalid data in SignUp form
        When Launch Hotels
        And Click on SignIn link
        And Click on SignUp link
        And Enter invalid email address
        And Click Continue button
            Then Verify error is displayed Enter a valid email address
            Then Verify “Continue” button is enabled
