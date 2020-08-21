///<reference types="cypress"/>

describe('Sortable',()=>{
    it('Sortable',()   =>{

        //Launch The Url
    cy.visit('http://www.leafground.com/pages/sorttable.html')

    cy.get('#table_id tr').each(($tr,index,$trs) =>{
            if($tr.find('td:nth-child(1)').text() < 1007)
                cy.log($tr.find('td:nth-child(2)').text())                
        })        
    })

})