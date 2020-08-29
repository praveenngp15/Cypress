///<reference types="cypress"/>

describe('LeafTaps Automation',()=>{
    it('Login To LeafTaps',()   =>{

        //Launch The Url
        cy.visit('http://leaftaps.com/opentaps')

        
        cy.get('#username').type('DemoSalesManager')
        cy.get('#password').type('crmsfa')
        cy.get('.decorativeSSSubmit').click()
    })
})