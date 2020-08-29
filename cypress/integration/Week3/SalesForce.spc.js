/// <reference types="cypress" />

// Test Suite -> Testcase: Login
describe("Myntra Automation", ()=> {    
    it('Myntra Test 1', () => {
        cy.visit('https://login.salesforce.com/',{
            headers :{
                Cookies:"BrowserId=qAklpOOXEeqy4W2BXGPMMQ; BrowserId_sec=qAklpOOXEeqy4W2BXGPMMQ; inst=APP_2w; rememberUn=false; com.salesforce.LocaleInfo=us; oinfo=c3RhdHVzPUZSRUUmdHlwZT0zJm9pZD0wMEQydzAwMDAwNlhNMHk=; sfdc_lv2=KxG83HWJy7TzGZqtQMizqgIOezdbu8WQfwcZC4hKW7Q5CRUCIzHPPmhTOTqfRLKtE=; disco=2w:00D2w000006XM0y:0052w000004NwO7:0; autocomplete=1; sid=00D2w000006XM0y!ARoAQBd_KuVgosGnohYgLSSN2k98NzcPAfbDZ1FTxyjve_kYpJ5YdA60PDTYw.oiiezOs1K0_W42H_BT4c7o8K4SXWYk27sZ; sid_Client=w000004NwO7w000006XM0y; clientSrc=103.89.67.69; oid=00D2w000006XM0y; 79eb100099b9a8bf=3:false:.salesforce.com; setupopen="
            },
        });

        cy.getCookies().then (von => cy.log(Object.info(von[0])))

        cy.get('#username').type('hari.radhakrishnan@testleaf.com')
        cy.get('#password').type('India@123')
        cy.get('#Login').click()

        cy.getCookies().then (von => cy.log(von))

        cy.setCookie('BrowserId','qAklpOOXEeqy4W2BXGPMMQ')
        cy.setCookie('BrowserId_sec','qAklpOOXEeqy4W2BXGPMMQ')
        cy.setCookie('inst','APP_2w')
        cy.setCookie('rememberUn','false')
        cy.setCookie('com.salesforce.LocaleInfo','us')
        cy.setCookie('oinfo','c3RhdHVzPUZSRUUmdHlwZT0zJm9pZD0wMEQydzAwMDAwNlhNMHk=')
        cy.setCookie('sfdc_lv2','KxG83HWJy7TzGZqtQMizqgIOezdbu8WQfwcZC4hKW7Q5CRUCIzHPPmhTOTqfRLKtE=')  
        cy.setCookie('disco','2w:00D2w000006XM0y:0052w000004NwO7:0')
        cy.setCookie('sid','00D2w000006XM0y!ARoAQBd_KuVgosGnohYgLSSN2k98NzcPAfbDZ1FTxyjve_kYpJ5YdA60PDTYw.oiiezOs1K0_W42H_BT4c7o8K4SXWYk27sZ') 
        
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

    Cypress.on('uncaught:exception', (err, runnable) => {
        //cy.log(err);
        return false;
    })


});