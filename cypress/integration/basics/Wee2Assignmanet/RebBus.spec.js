///<reference types="cypress"/>

describe('Red Bus',()=>{
    it('Red Bus',()   =>{
       cy.visit('https://www.redbus.in/') 
       cy.viewport(1500,1000)
       //cy.get('#manageHeaderdd').scrollIntoView({force: true})
       cy.get('.manageHeaderLbl').click()
       cy.contains('Show My Ticket').click()
       cy.get('#searchTicketTIN').type('12345678901111')
       cy.get('#searchTicketEmail').type('praveenngp15@gmail.com{enter}')
      // cy.get('#ticketSearch').click()
       cy.get('.msg-error span#nf_error').should('have.text','Something went wrong, please try again later!') 
       cy.get('[id="redBus Bus Hire"]').click();

       cy.request('GET' , 'https://www.redbus.in/bushire/api/common/source').then(response =>{
           let random = Math.floor(Math.random()*response.body.length)
            cy.get('.SourceCity.autocomplete_input').click()
            cy.wait(4000)
           cy.get('#src_city_block li').each(($el , index, els)=>{
                assert.equal($el.text(), response.body[index].value, 'foo equal `bar`');
           })
           cy.get('#src_city_block li').eq(random).click({force : true})

           let startingPoint =`https://www.redbus.in/bushire/api/common/pickup?queryString=Railway&city=${response.body[random].value}`
           
           cy.request('GET', startingPoint).then(response =>{     

                cy.get('#pick_up_block input').type(response.body[0].place_id)

                cy.request('GET' , 'https://www.redbus.in/bushire/api/common/destination?queryString=Airport').then( (res)=>{
                    cy.get('#hire_btn').click()
                })       
            
            })   
       }) 


    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        //cy.log(err);
        return false;
    })
})