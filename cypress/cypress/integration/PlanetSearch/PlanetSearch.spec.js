import SearchPage from '../pageObjects/searchPage'

const searchPage = new SearchPage()

Given('Application is running',()=>{
    searchPage.navigateToURL()
})

When('I select search for the Planet {string}',(planetName)=>{
    // search with the planet name provided in feature file
    searchPage.planetSearch(planetName)
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

Then('I should be able to see Not Found',()=>{
    // verifying the "Not Found." lable on the screen after the search
    cy.get('body > app-root > div > div > div > div:nth-child(5)').invoke('text').then((text1) => {
        expect(text1).to.be.eq('Not found.')
    })
})