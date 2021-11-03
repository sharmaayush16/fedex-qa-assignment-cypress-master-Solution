QA Engineer Assessment Solution
Introduction
6+ years of experience with Test Automation Testing in FedEx/TNT Worked in multiple FedEx OpCos - FedEx Express, FedEx Ground, & TNT. Worked in projects like POS, Hubstack, Sort & Linehaul area, STING. Good exposure with various automation frameworks like Selenium WebDriver, Cucumber, Protractor, Rest Assured API Good exposure with Agile Methodology ISTQB Certified SAFe 5 Certified Agilist

Name: Ayush Sharma Email: ayush.sharma.osv@fedex.com

Solution Comments below.

Assignment
Start
Configured the local environment, and then able to successfully run the scenarios and generate reports. Tests can be run by using either "npm run test" command (which will do a headless execution in Electron browser ) or "./node_modules/.bin/cypress open" (which will run the tests in Cypress Runner)

The Coding
As given in the README file, automated the following scenarios using Cucumber and Cypress (BDD approach):

Main features
SOLUTION Comments: Automated all 3 features listed below. All suggested test data have been covered. Please see below more details for each feature.
Mocha Awesome report is generated in cypress/reports/mochareports folder. 2 scenarios are failing due to below defect:

DEFECT: When you search for either a character or a planet and you get one or more results for it, if you clear the Search form and hit Search again, the results are Not cleared.
Search for character (person)
When you search for a character and it’s a valid one, then you should be able to see his / her “Gender”, “Birth year”, “Eye color” and “Skin color”.
When you search for a character and it’s not a valid one, then you should be able to see “Not found” in the results. SOLUTION Comments: Automated both scenarios with feature file “CharacterSearch.feature”, for test data (Luke Skywalker, Leia Organa) as well as invalid data.
Search for planet
When you search for a planet and it’s a valid one, then you should be able to see its “Population”, “Climate” and “Gravity”.
When you search for a planet and it’s not a valid one, then you should be able to see “Not found” in the results. SOLUTION Comments: Automated both scenarios with feature file “PlanetSearch.feature”, for the test data (Alderaan), as well as invalid data.
Additional flows
When you search for either a character or a planet and you get one or more results for it, clear the “Search form” and hit the Search button again, you should then get an empty result list (previous search results are removed). SOLUTION Comments: Automated 2 scenarios (1 for character search and 1 for planet search) with feature file “AdditionalFlows.feature”, with 1 data for each. Both scenarios are failing with below defect: DEFECT: When you search for either a character or a planet and you get one or more results for it, if you clear the Search form and hit Search again, the results are Not cleared.
You can search for results by clicking the “Search” button or by pressing “enter” on the search field. SOLUTION Comments: Automated 2 scenarios (1 for character search and 1 for planet search) for searching using Enter key with feature file “additional-flows.feature”. Used 1 data for each.
When for example you have searched for a full planet name and you’ve got results, if you switch to People and search for the same thing (that has no matching people based on a partial name), you should get a “Not found” in the results. SOLUTION Comments: Automated 2 scenarios (1 for character search and 1 for planet search) with feature file “AdditionalFlows.feature”.
You can have more than one results, for both Planets and Names (partial matching) SOLUTION Comments: Automated 2 scenarios (1 for character search and 1 for planet search) with feature file “AdditionFlows.feature”.
Remarks