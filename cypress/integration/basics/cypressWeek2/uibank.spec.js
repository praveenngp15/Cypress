///<reference types="cypress"/>

describe('LeafTaps Automation',()=>{
    it('Login To LeafTaps',()   =>{

        //Launch The Url
        cy.visit('https://uibank.uipath.com/register-account')

        //Enter First Name
        cy.get('[name="firstName"]').type('Praveen')

        //Select Title
        cy.get('#title').select('Mrs')

        //Enter Middle Name
        cy.get('#middleName').type('Kumar')

        //Enter Middle Name
        cy.get('#middleName').type('Kumar')

        //Enter Last Name
        cy.get('#lastName').type('Natarajan')

        //Select Gender
        cy.get('#sex').select('Male')

        //Select Employment
        cy.get('#employmentStatus').select('Full-time')

        //Enter Date
        cy.get('#age').type('29/01/95')

        //Select Martial Status
        cy.get('#maritalStatus').select('Single')

        //Enter number of Dependentss
        cy.get('#numberOfDependents').type('1')

        //Enter username
        cy.get('#username').type('praveenngp155')

        //Enter Email
        cy.get('#email').type('parveenngp155@gmail.com')

        //Enter Password
        cy.get('#password').type('praveen007')


        //Click Register Button
        cy.get('[type="submit"]').click()

        //wait for five seconds
        cy.wait(5000)

        //Verify Confirmation
        cy.get('h2').should('contain.text','Welcome To The UiBank Family!')
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        //cy.log(err);
        return false;
    })


})