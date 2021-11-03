// ***** This class contains all the supporting functions and objects required to operate on Search page ****

class SearchPage{
    
    navigateToURL() // function to navigate to application URL
    {
        cy.visit('http://localhost:4200/')
    }
    clickSearchButton() // function to click on Search button
    {
        const button = cy.get('[type="submit"]')
        button.click()
        cy.wait(2000)
    }

    selectPeopleRadioButton() // function to click on People radio button
    {
        const radioButton = cy.get('#people')
        radioButton.click()
    }

    selectPlanetRadioButton() // function to click on Planet radio button
    {
        const radioButton = cy.get('#planets')
        radioButton.click()
    }

    enterValueToSearch(value)  // function to enter value in Search Form
    {
        const searchText = cy.get('#query')
        searchText.clear()
        searchText.type(value)
    }

    searchPeopleWithEnter(value)  // function to search people by pressing "Enter"
    {
        this.selectPeopleRadioButton()
        this.enterValueToSearch(value)
        cy.get('#query').type('{enter}')
    }

    searchPlanetWithEnter(value)  // function to search planets by pressing "Enter"
    {
        this.selectPlanetRadioButton()
        this.enterValueToSearch(value)
        cy.get('#query').type('{enter}')
    }

    clearSearchForm()  // function to clear Search form
    {
        const searchText = cy.get('#query')
        searchText.clear()
    }
    
    planetSearch(value)  // function to search planet
    {
        this.selectPlanetRadioButton()
        this.enterValueToSearch(value)
        this.clickSearchButton()
        return this
    }

    characterSearch(value)  // function to search people
    {   
        this.selectPeopleRadioButton()
        this.enterValueToSearch(value)
        this.clickSearchButton()
        return this
    }
}
export default SearchPage