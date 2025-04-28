Feature: View List of Tasks.

    Scenario: I want to see an overview of all my tasks.
        When I go to '/'
        
        The page should include a large title with text 'Your Tasks'
        The page should include a large link with text 'Create'.

        The page should include a list of tasks.

            The list should include a list of headers for the task table: 'title', 'due at', 'status'.

            if there are tasks, then they should be listed, including:
                The task's title, a colored link.
                    If it is longer than 40 characters, it is truncated, ending with an elipses.
                The due date & time, in standard text.
                    It is given to the minute, in a human-readable format
                The task status.   
                    If it is complete, it should be highlighted with a light grey box.
                    If it is incomplete, it should be in standard text.

            If there are no tasks, text should be displayed: 'you have no tasks'.

Feature: View Task details

    Scenario: I want to see the full details of a task.
        When I go to '/'

        And click the link for the target task.
        Then I am sent to the correct details page (details match chosen task).

        The page should include a small link with text 'home'.

        The page should include a large title with the name of the task.
            If it is longer than 40 characters, it is truncated, ending with an elipses.

        The page should include a large link with text 'Delete'.

        THe page should include a table giving all the details of the task.
            There should be three rows and three columns.
            
            The first row should include the property name:
                'description'
                'due at'
                'status'

            The first row should include the formatted property value:
                The task's description, in standard text.
                The due date & time, in standard text.
                    It is given to the minute, in a human-readable format.
                The task status, in standard text.

            The third row should contain a link with text 'Change'

Feature: Return home from details.

    Scenario: I want to return to the home page after viewing a task.
        When I go to '/details'

        And click the link at the top reading 'home'.
        Then I am sent to '/'.



Feature: View Task details

    Scenario: I want to edit the details of a task.
        When I go to '/details' for an existing task.

        Then click the link reading 'change' in the 'description' row.
        Then I am prompted to type in a new value for 'description'.
        Then the value is immediately updated to the value I entered.

        Then click the link reading 'change' in the 'status' row.
        Then the value of status is immediately updated to the other possible value.
        
        Then click the link reading 'change' in the 'due date' row.
        Then I am prompted to select a new value for 'due date' using a date picker.
        Then the value is immediately updated to the value I entered.