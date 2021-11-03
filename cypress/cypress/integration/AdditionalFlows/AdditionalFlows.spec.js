import SearchPage from '../pageObjects/searchPage'

const searchPage = new SearchPage()

Given('Application is running',()=>{
    searchPage.navigateToURL()
})

When('I select search for the Character {string}',(charName)=>{
    // search with the character name provided in feature file
    searchPage.characterSearch(charName)
})

Then('I should be able to see details',(datatable)=> {
    datatable.hashes().forEach(element =>{
        //comparing character name given in the feature file with the character name searched on the application
        cy.get('body > app-root > div > div > div > div > div > div > app-character > div > div > h6').invoke('text').then((charName)=> {
            expect(charName).to.be.eq(element.name)
        })

        //comparing attributes given in the feature file with the displayed lable on the application
        cy.get('[class="col-sm-2"]').then((items)=> {
            expect(items[0]).to.contain.text('Gender:')
            expect(items[1]).to.contain.text('Birth year:')
            expect(items[2]).to.contain.text('Eye color:')
            expect(items[3]).to.contain.text('Skin color:')
        })
         //comparing attributes given in the feature file with the searched results on the application
        cy.get('[class="col-sm-10"]').then((items)=> {
            expect(items[0]).to.contain.text(element.gender)
            expect(items[1]).to.contain.text(element.birthyear)
            expect(items[2]).to.contain.text(element.eyecolor)
            expect(items[3]).to.contain.text(element.skincolor)
        })
    })
})

When('I clear the search form',()=>{
    searchPage.clearSearchForm()
})

And('I click again on Search button',()=>{
    searchPage.clickSearchButton()
})

Then('I should be able to see no results',()=>{
    // verifying the "Not Found." lable on the screen after the search
    cy.get('body > app-root > div > div > div > div:nth-child(5)').invoke('text').then((text1) => {
        expect(text1).to.be.eq('Not found.')
    })
})

When('I select search for the Planet {string}',(planetName)=>{
    // search with the planet name provided in feature file
    searchPage.planetSearch(planetName)
})

When('I press enter search for the Planet {string}',(planetName)=>{
     // search with the planet name provided in feature file by pressing enter
    searchPage.searchPlanetWithEnter(planetName)
})


When('I select search for an invalid Planet {string}',(inavlidPlanet)=>{
    // search with the planet name provided in feature file
    searchPage.planetSearch(inavlidPlanet)
})

Then('I should be able to see Planet details',(datatable)=> {
    datatable.hashes().forEach(element =>{
        //comparing planet name given in the feature file with the planet name searched on the application
        cy.get('body > app-root > div > div > div > div > div > div > app-planet > div > div > h6').invoke('text').then((planetName)=> {
            expect(planetName).to.be.eq(element.name)
        })
        //comparing attributes given in the feature file with the displayed lable on the application
        cy.get('[class="col-sm-2"]').then((items)=> {
            expect(items[0]).to.contain.text('Population:')
            expect(items[1]).to.contain.text('Climate:')
            expect(items[2]).to.contain.text('Gravity:')
        })
        //comparing attributes given in the feature file with the searched results on the application
        cy.get('[class="col-sm-10"]').then((items)=> {
            expect(items[0]).to.contain.text(element.population)
            expect(items[1]).to.contain.text(element.climate)
            expect(items[2]).to.contain.text(element.gravity)
        })
    })
})

When('I enter search for the Character {string}',(CharName)=>{
    // search with the character name provided in feature file by pressing enter
    searchPage.searchPeopleWithEnter(CharName)
})

When('I select planets radio button',()=>{
    searchPage.selectPlanetRadioButton()
})

When('I select people radio button',()=>{
    searchPage.selectPeopleRadioButton()
})

When('I select search for a valid charcter name {string}',(charName)=>{
    searchPage.characterSearch(charName)
})

When('I select search for a valid planet name {string}',(planetName)=>{
    searchPage.planetSearch(planetName)
})

Then('I should be able to see multiple results',()=>{
    // verifying multiple result displays
    cy.get('.card').its('length').should('be.greaterThan',1)
    
})
