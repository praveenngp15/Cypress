///<reference types="cypress"/>

describe('Flipkart',()=>{
    it('Flipkart',()   =>{
        //Launch The Url
        cy.visit('http://flipkart.com/')
        cy.xpath("//span[text()='Electronics']").trigger('mouseover')
        cy.wait(4000)
        cy.get('[title="Vivo"]').click()
        cy.wait(4000)
        cy.xpath('//option[@value="Min"]//parent::select').select('2000')
        cy.xpath('//option[@value="Max"]//parent::select').select('13000')
        cy.wait(4000)
        //cy.xpath('//*[text()="Number of Cores"]').scrollTo('bottom')
        cy.xpath('//*[text()="Number of Cores"]').click()
        cy.wait(4000)
        cy.xpath('//div[text()="Dual Core"]').click()
        cy.xpath('(//section)[1]').should('include.text', 'Dual Core')
    })
})  