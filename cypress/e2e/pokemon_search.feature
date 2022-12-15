Feature: pokemon research non regression


    Scenario: Research by type

        Given a user accessing Pokemon website
        When  a user research pokemon by type
        Then  pokemon list by type is displayed

    Scenario: Research by weakness

        Given a user accessing Pokemon website
        When  a user research pokemon by weakness
        Then  pokemon list by weakness is displayed

    Scenario: Research by type and weakness

        Given a user accessing Pokemon website
        When  a user research pokemon by type and weakness
        Then  pokemon list by type and weakness is displayed

    Scenario: Research by no criteria

        Given a user accessing Pokemon website
        When  a user research pokemon with no criteria entered
        Then  an alert message is displayed


