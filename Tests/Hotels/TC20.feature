@regression @tc20
Feature: TermsAndConditions link and PrivacyStatements link open correct page on new tab
Scenario: Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab
        When Launch Hotels
        And Click on SignIn link
        And Click on SignUp link
        When Click Terms and Conditions link
        Then Verify Terms and Conditions page opens in new tab
        Then Verify Last revised date format
        When Click Privacy Statement link
        Then Verify Privacy Statement page opens in new tab
        Then Verify Last Updated date format

