/// <reference types="cypress" />

// Test Suite -> Testcase: Login
describe("Myntra Automation", ()=> {    
    it('Myntra Test 1', () => {
        cy.visit('https://login.salesforce.com/');
        cy.get('#username').type('hari.radhakrishnan@testleaf.com')
        cy.get('#password').type('India@123')
        cy.get('#Login').click()
        cy.xpath('//*[text()="Start Tour"]').click()
        cy.get('span.uiImage img[title="User"]').trigger('mouseover')
        cy.get('.tooltip-body').should('be.visible')
        cy.get('.slds-global-header lightning-primitive-icon svg.slds-icon.slds-icon_x-small').click()
        cy.contains('New Lead').click()
        cy.get('[placeholder="Last Name"]').type('Kumar')
        cy.xpath("(//input[@class=' input'])[3]").type('Testleaf')

        cy.get('[class="forceChatterPublisherPresentationDesktop forceChatterPublisherQuickAction"] [data-aura-class="uiButton"]').click()
        cy.get('button.salesforceIdentityAppLauncherHeader').click()
        cy.xpath("//button[text()='View All']").click()
        cy.xpath("//p[text()='Sales']").click()
        cy.get('span[title="Sales"]').should('be.visible')
        cy.get('[href="/lightning/o/Lead/home"]').click()
        cy.get("//span[text()='Name']").click()
        cy.get('[placeholder="Search this list..."]').type('Kumar')
        cy.get('.active.lafPageHost tbody [class="slds-truncate"]').eq(1).click()
        cy.xpath('//a[@title="Working - Contacted"]').click()
        cy.xpath("//span[text()='Save']").click()
        cy.get('.outputLookupLink').eq(1).invoke()


    })
});