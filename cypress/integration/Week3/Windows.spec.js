/// <reference types="cypress" />

// Test Suite -> Testcase: Login
describe("Window Handling", ()=> {    
    it('Open new Window and Switch', () => {
        cy.visit('http://www.leafground.com/pages/Window.html');
        cy.title().then(title =>{
            cy.log(title)
        })
        cy.openWindow('http://www.leafground.com/home.html')
        cy.title().then(title =>{
            cy.log(title)
        })
        cy.xpath("//img[@alt='Edit / Text Fields']").click()
        cy.reloadDocument()
        cy.get('#email').type('praveenngp15@gmail.com')
        //cy.switchWindow()
        cy.closeSecondWindow()
        cy.title().then(title =>{
            cy.log(title)
        })

    })
});