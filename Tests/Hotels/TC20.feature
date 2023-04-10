@regression @tc20
Feature: TermsAndConditions link and PrivacyStatements link open correct page on new tab
Scenario: Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab
        When Launch Hotels
        And Click on SignIn link
        And Click on SignUp link
        And Click Terms and Conditions link
        And Verify Terms and Conditions page opens in new tab
        And Verify Last revised date format
        And Click Privacy Statement link
        And Verify Privacy Statement page opens in new tab
        And Verify Last Updated date format

