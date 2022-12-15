Feature: pokemon research non regression

    Background: access website
        Given a user accessing Pokemon website

    Scenario: Research by type

        When  a user research pokemon by type
        Then  pokemon list by type is displayed

    Scenario: Research by weakness

        When  a user research pokemon by weakness
        Then  pokemon list by weakness is displayed

    Scenario: Research by type and weakness

        When  a user research pokemon by type and weakness
        Then  pokemon list by type and weakness is displayed

    Scenario: Research by no criteria

        When  a user research pokemon with no criteria entered
        Then  an alert message is displayed


