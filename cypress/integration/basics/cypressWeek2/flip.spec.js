///<reference types="cypress"/>

describe('My First Test Suite', () => {

    it('My First Test Case', () => {
        cy.visit('https://www.flipkart.com/');
        cy.wait(5000)

        cy.xpath("//*[text()='ABOUT']").first().trigger('mouseover').wait(3000);
          
    })
})
