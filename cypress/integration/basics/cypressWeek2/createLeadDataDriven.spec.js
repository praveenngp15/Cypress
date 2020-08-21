///<reference types="cypress"/>

const createLead = require('../../../fixtures/createLead.json')
describe('Create Lead',()=>{


    beforeEach('Login into Leaf Taps',()=>{
        cy.visit('http://leaftaps.com/opentaps');
        // Find the username and type the value
        cy.get('#username').type('DemoSalesManager').get('#password').type('crmsfa').get('.decorativeSubmit').click();
        // Click CRM/SFA
        cy.contains('CRM/SFA').click()
        // Click Leads
        cy.contains('Leads').click();
    })

    createLead.forEach(data =>{ 
        it('Create Lead ' + data.org,()   =>{
        cy.contains('Leads').click();
        cy.contains('Create Lead').click();
        cy.get('form#createLeadForm [name="companyName"]').type(data.org);
        cy.get('form#createLeadForm [name="firstName"]').type(data.fname);
        cy.get('form#createLeadForm [name="lastName"]').type(data.lname);
        cy.get('[name="submitButton"][name="submitButton"]').click()
        })
    })

})