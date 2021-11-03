Feature: Verify additional flows for search functionality

    I want to verify different flows of the appliation

    Scenario: Verify that after a successful result displayed for character search, if the search form is cleared and clicked Search, empty results list should be displayed
        Given Application is running
        When I select search for the Character "Luke Skywalker"
        Then I should be able to see details
        |name|gender|birthyear|eyecolor|skincolor|
        |Luke Skywalker|male|19BBY|blue|fair|
        When I clear the search form
        And I click again on Search button
        Then I should be able to see no results

    Scenario: Verify that after a successful result displayed for character search, if the search form is cleared and clicked Search, empty results list should be displayed
        Given Application is running
        When I select search for the Planet "Tatooine"
        Then I should be able to see Planet details
        |name|population|climate|gravity|
        |Tatooine|200000|arid|1 standard|
        When I clear the search form
        And I click again on Search button
        Then I should be able to see no results

    Scenario: Verify that the successful result is displayed for character search by pressing enter
        Given Application is running
        When I enter search for the Character "Leia Organa"
        Then I should be able to see details
        |name|gender|birthyear|eyecolor|skincolor|
        |Leia Organa|female|19BBY|brown|light|

    Scenario: Verify that the successful result is displayed for planet search by pressing enter
        Given Application is running
        When I press enter search for the Planet "Naboo"
        Then I should be able to see Planet details
        |name|population|climate|gravity|
        |Naboo|4500000000|temperate|1 standard|
    
    Scenario: Verify that after a successful result displayed for character search, if the planet radio button is checked and clicked Search, no results list should be displayed
        Given Application is running
        When I select search for the Character "Owen Lars"
        Then I should be able to see details
        |name|gender|birthyear|eyecolor|skincolor|
        |Owen Lars|male|52BBY|blue|light|
        When I select planets radio button
        And I click again on Search button
        Then I should be able to see no results

    Scenario: Verify that after a successful result displayed for planet search, if the people radio button is checked and clicked Search, no results list should be displayed
        Given Application is running
        When I select search for the Planet "Tatooine"
        Then I should be able to see Planet details
        |name|population|climate|gravity|
        |Tatooine|200000|arid|1 standard|
        When I select people radio button
        And I click again on Search button
        Then I should be able to see no results
        
    Scenario: Verify the application behaviour when character serach results in multple results
        Given Application is running
        When I select search for a valid charcter name "DA"
        Then I should be able to see multiple results
    
    Scenario: Verify the application behaviour when planet serach results in multple results
        Given Application is running
        When I select search for a valid planet name "Al"
        Then I should be able to see multiple results

    