
/// <reference types="cypress" />

const myntaData = require('../../fixtures/myntra.json')

describe("Myntra Automation", ()=> {    

    beforeEach('Login into Leaf Taps',()=>{
        //Navigate to Myntra website
        cy.visit('https://myntra.com', {
            headers: {
                "Accept-Encoding" : "gzip, deflate"
            }
        });
    })

    myntaData.forEach(data =>{
            it('Myntra Test 1', () => {
                //Type Product and Click Enter button (Sunglasses, Bags)
                const productName = `${data.productName}{enter}`
                cy.get('.desktop-query input').type(productName)

                //Select Brand (Polaroid , Handbags)
                const brand = `[value="${data.brand}"]`
                cy.get(brand).click({force: true})
                //Wait for Three seconds
                cy.wait(3000)

               //Print Length for product type(Men Rectangle Sunglasses , Shoulder Bag)

               const productType = `.product-product:contains("${data.productType}")`

                cy.get(productType).then($ele => {
                    cy.log(data.productType, $ele.length)
                })        

                 //Product Price - Original
                 const productPriceOriginal = `.product-product:contains("${data.productType}") ~ div.product-price .product-strike`
                cy.get(productPriceOriginal).first().invoke('text').then((text) => {
                    cy.log(data.productType, text)
                });

                //Product Price - Discount
                const productPriceDiscount =`.product-product:contains("${data.productType}") ~ div.product-price .product-discountedPrice`
                cy.get(productPriceDiscount).first().invoke('text').then((text) => {
                    cy.log(data.productType, text)
                });

                cy.get("li.product-base").first().trigger('mouseover').wait(3000).find(".image-grid-iconText").click({force : true});
                cy.get(".results-similarItemContainer li").its('length').should('be.gt',5); 
            })
        })
});