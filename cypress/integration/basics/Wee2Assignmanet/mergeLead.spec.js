///<reference types="cypress"/>

describe('LeafTaps Automation',()=>{
    it('Login To LeafTaps',()   =>{

        var lead1
        var lead2

        //Launch The Url
        cy.visit('http://leaftaps.com/opentaps')
        cy.get('#username').type('DemoSalesManager')
        cy.get('#password').type('crmsfa')
        cy.get('.decorativeSubmit').click()
        cy.contains('CRM/SFA').click()
        cy.contains('Leads').click();
        //cy.contains('Merge Leads').click()

        cy.get('#myLeads tbody tr td.x-grid3-td-partyId:nth-child(1)').eq(0).invoke('text').then((text) => {
            lead1 = text;
            cy.get('#myLeads tbody tr td.x-grid3-td-partyId:nth-child(1)').eq(1).invoke('text').then((text) => {
                lead2 = text;
                cy.contains('Merge Leads').click()
                cy.get('#ComboBox_partyIdFrom').type(lead1)
                cy.get('#ComboBox_partyIdTo').type(lead2)
                cy.get('.buttonDangerous').click()
                cy.contains('Find Leads').click()
                cy.get('[name="id"]').type(lead1)
                cy.xpath('//button[text()="Find Leads"]').click()
                cy.get('.x-paging-info').should('have.text','No records to display')

            });
        });
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        //cy.log(err);
        return false;
    })
})