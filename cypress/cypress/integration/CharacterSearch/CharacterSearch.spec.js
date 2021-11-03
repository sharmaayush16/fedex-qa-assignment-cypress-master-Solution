import SearchPage from '../pageObjects/searchPage'

const searchPage = new SearchPage()

Given('Application is running',()=>{
    searchPage.navigateToURL()
})

When('I select search for the Character {string}',(charName)=>{
    // search with the character name provided in feature file
    searchPage.characterSearch(charName)
})

When('I select search for an invalid charcter name {string}',(inavlidChar)=>{
    // search with the character name provided in feature file
    searchPage.characterSearch(inavlidChar)
})

Then('I should be able to see details',(datatable)=> {
    datatable.hashes().forEach(element =>{
         //comparing character name given in the feature file with the character name searched on the application
        cy.get('body > app-root > div > div > div > div > div > div > app-character > div > div > h6').invoke('text').then((planetName)=> {
            expect(planetName).to.be.eq(element.name)
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

Then('I should be able to see Not Found',()=>{
    // verifying the "Not Found." lable on the screen after the search
    cy.get('body > app-root > div > div > div > div:nth-child(5)').invoke('text').then((text1) => {
        expect(text1).to.be.eq('Not found.')
    })
})