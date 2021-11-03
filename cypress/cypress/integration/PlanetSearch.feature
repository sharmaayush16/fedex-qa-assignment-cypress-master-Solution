Feature: Verify Search functionality for planet search

    I want to search for the planet name

    Scenario: Verify the successful search of planet name
        Given Application is running
        When I select search for the Planet "Alderaan"
        Then I should be able to see Planet details
        |name|population|climate|gravity|
        |Alderaan|2000000000|temperate|1 standard|

    Scenario: Verify the application behaviour when the plane entered is not valid
        Given Application is running
        When I select search for an invalid Planet "Blaaa"
        Then I should be able to see Not Found