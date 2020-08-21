///<reference types="cypress"/>

describe('LeafTaps Automation',()=>{
    it('Alert',()   =>{
        //Launch The Url
        cy.visit('http://www.leafground.com/pages/Alert.html',{
            onBeforeLoad(win){
                cy.stub(win, 'confirm').returns('false')
                cy.stub(win, 'prompt').returns('SimpliLearn')
            }
        })
        cy.contains('Prompt Box').click()
     })
})