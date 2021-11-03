Feature: Verify Search functionality for people search

    I want to search for the character name

    Scenario: Verify the successful search of planet name
        Given Application is running
        When I select search for the Character "Obi-Wan Kenobi"
        Then I should be able to see details
        |name|gender|birthyear|eyecolor|skincolor|
        |Obi-Wan Kenobi|male|57BBY|blue-gray|fair|

    Scenario: Verify the application behaviour when the plane entered is not valid
        Given Application is running
        When I select search for an invalid charcter name "Blaaa"
        Then I should be able to see Not Found