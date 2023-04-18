@regression @tc24
Feature: Verify error is displayed when user submits the empty feedback form
Scenario: Verify error is displayed when user submits the empty feedback form
        When Launch Hotels
        And Click on SignIn
        And Click “Feedback”
        And Select any star-rating
        And Enter any comments
        And Select any option for “How likely are you to return to Hotels.com”
        And Select any answer for “Prior to this visit, have you ever booked on Hotels.com”
        And Select any answer for ”Did you accomplish what you wanted to do on this page”
        And Click on Submit button
        Then Verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed
            
