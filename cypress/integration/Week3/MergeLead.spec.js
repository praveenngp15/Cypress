///<reference types="cypress"/>

describe('LeafTaps Automation',()=>{

    let fromId;
    let toId
    it('Login To LeafTaps',()   =>{
        cy.visit('http://leaftaps.com/opentaps')
        cy.login('DemoSalesManager','crmsfa')
        cy.contains('Merge Leads').click()
    })

    it('Merge Lead',()   =>{
        
        /* http://leaftaps.com/crmsfa/control/LookupLeads?id=&parm0=LookupLeads */

        cy.openWindow('http://leaftaps.com/crmsfa/control/LookupLeads?id=&parm0=LookupLeads')
        cy.reloadDocument()
        cy.get('[name="loginform"] [name="USERNAME"]').type('DemoSalesManager')
        cy.get('[name="PASSWORD"]').type('crmsfa')
        cy.get('[value="Login"]').click()
        cy.reloadDocument()
        cy.get('[name="firstName"]').type('Mark')
        cy.xpath("//button[text()='Find Leads']").click()
        cy.reloadDocument()

        cy.xpath("(//div[@class='x-grid3-cell-inner x-grid3-col-partyId'])[1]").invoke('text').then((text) => {
            cy.log(text)
            fromId = text
            cy.get('[name="firstName"]').clear()
            cy.get('[name="firstName"]').type('Steve')
            cy.xpath("//button[text()='Find Leads']").click()
            cy.reloadDocument()    
            cy.xpath("(//div[@class='x-grid3-cell-inner x-grid3-col-partyId'])[1]").invoke('text').then((text) => {
                cy.log(text)
                toId = text
                cy.closeSecondWindow()
                cy.get('#ComboBox_partyIdFrom').type(fromId)
                cy.get('#ComboBox_partyIdTo').type(toId)
                cy.get('.buttonDangerous').click()
                cy.contains('Find Leads').click()
                cy.get('[name="id"]').type(fromId)
                cy.xpath('//button[text()="Find Leads"]').click()
                cy.get('.x-paging-info').should('have.text','No records to display')
            })
        })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        //cy.log(err);
        return false;
    })
})