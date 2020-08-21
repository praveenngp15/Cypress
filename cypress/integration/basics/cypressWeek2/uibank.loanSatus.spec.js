///<reference types="cypress"/>

describe('LeafTaps Automation',()=>{

    let loanId
    let amount;
    let income;
    let age;

    beforeEach('Get quotes',()=>{
        cy.request('GET' , 'https://uibank-api.azurewebsites.net/api/quotes/').then(response =>{
            cy.log(response.body.length)
            let random = Math.floor(Math.random() * response.body.length)
            loanId = response.body[random].id
            amount = response.body[random].amount
            income = response.body[random].income
            age = response.body[random].age
        })
    })


    it('Login To LeafTaps',()   =>{
            cy.visit('https://uibank.uipath.com/')
            cy.get('#username').type('praveenng155')
            cy.get('#password').type('praveen007')
            cy.get('form button').click()    
            cy.wait(5000)
            cy.get('[href="/loans/lookup"]').click()
            cy.wait(5000)   
            cy.get('#quoteID').type(loanId)
            cy.get('app-loan-lookup [type="submit"]').click()
            cy.wait(5000)
            cy.get('span#income').should('have.text',income)
            cy.get('span#age').should('have.text',age)
            cy.get('span#amountValue').should('have.text',amount)



    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        //cy.log(err);
        return false;
    })


})