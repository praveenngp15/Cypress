
/// <reference types="cypress" />

describe("Myntra Automation", ()=> {    

    it('Myntra Test 1', () => {

        //Navigate to Myntra website
        cy.visit('https://myntra.com', {
            headers: {
                "Accept-Encoding" : "gzip, deflate"
            }
        });


        //Type Sunglasses and hit enter button
        cy.get('.desktop-query input').type('SunGlasses{enter}')
        
        //Click Brand "Polaroid".
        cy.get('[value="Polaroid"]').click({force: true})

        //Wait for Three seconds
        cy.wait(3000)
        

        //Print Length
        cy.get('.product-product:contains("Men Rectangle Sunglasses")').then($ele => {
            cy.log($ele.length)
        })


        //Product Price - Original
        cy.get('.product-product:contains("Men Rectangle Sunglasses") ~ div.product-price .product-strike').first().invoke('text').then((text) => {
            cy.log(text)
        });

        //Product Price - Discount
        cy.get('.product-product:contains("Men Rectangle Sunglasses") ~ div.product-price .product-discountedPrice').first().invoke('text').then((text) => {
            cy.log(text)
        });
        


       /* cy.get('.product-product:contains("Men Rectangle Sunglasses") ~ div').each( $ele => {
            cy.log($ele.find('.product-price .product-discountedPrice').text())
            $ele.find('.product-price .product-discountedPrice').invoke('text').then((text) => {
                    cy.log(text)
            });
        }) */
        

        cy.get("li.product-base").first().trigger('mouseover').wait(3000).find(".image-grid-iconText").click({force : true});

        cy.get(".results-similarItemContainer li").its('length').should('be.gt',5);

    })



});