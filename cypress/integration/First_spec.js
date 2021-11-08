/// <reference types="Cypress" />
describe('August 2021 Products', function()

{
    beforeEach(function() {
        cy.fixture('test_user').then(function(data)
        {
            this.data=data
        })
    });

    it('2 piece Salted Caramel Triangle', function()
    {
        // Load the Marketplace
        cy.visit("https://www.farmersfeedingutah.com/")
        //Search for product
        cy.get('[data-cy=search-field-desktop]').type('Salted Caramel Triangle')
        cy.get('.ant-input-group-addon > .ant-btn').click()
        //Validate product name
        cy.get('.ant-card-meta-title > .Text-sc-1vkqvnz-0').should('contain', '2 piece Salted Caramel 1.5oz')
        //Drill in to the product detail page
        cy.get('[data-cy=product-1]').click({force:true})
        cy.get('.btNBDp').should('contain', '2 piece Salted Caramel 1.5oz')
        cy.get('.ImueA').should('contain', '$2.99')
        cy.get('.dZMIjF > .Text-sc-1vkqvnz-0').should('contain', 'V Chocolates')
    })

    it('Tests profile', function()
    {
        // Log in to the Marketplace
        cy.visit("https://farmersfeedingutah.com/")
        cy.get('.jRDhuk > img').click()
        //cy.get('.ant-space > :nth-child(4) > .Box-sc-1oaqxz5-0 > .ant-btn').click()
        cy.get('.ant-drawer-body > :nth-child(4) > .ant-btn > .Text-sc-1tf262f-0').click().wait(300)
        //cy.get('[data-cy=login-link]').click().wait(300)
        cy.url().should('include', '/user/login')
        cy.get('#email').type(this.data.email)
        cy.get('#password').type(this.data.password)
        cy.get('[data-cy=login-btn]').click()
        //Go to profile
        cy.get(':nth-child(4) > .Box-sc-1oaqxz5-0 > .ant-btn > .anticon > svg').click()
        cy.get('[data-cy=my-profile-link]').click()
        cy.url().should('include', '/profile')
        //Page validations
        cy.get('.eTmYYa').should('contain', 'My Account')
        cy.get('.bmhCsL').should('contain', 'My profile')
    })
})
