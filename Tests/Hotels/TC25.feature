@regression @tc25
Feature: Verify user can submit feedback after completing the feedback form
Scenario: Verify user can submit feedback after completing the feedback form
        When Launch Hotels
        And Click on SignIn
        And Click “Feedback”
        And Click on Submit button
            Then Verify error message is displayed
            Then Verify red-dotted line is displayed around star-section
            
