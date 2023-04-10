@regression @tc5
Feature: Feedback
Scenario: Verify Feedback feature
        When Launch Hotels
        And Click on SignIn
        And Click “Feedback”
        And Click on Submit button
            Then Verify error message is displayed
            Then Verify red-dotted line is displayed around star-section
            
