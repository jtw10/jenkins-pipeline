/*
Test file - used to check that user can be authenticated successfully.
Can enter username and password to manually run this spec file 
*/

/// <reference types="cypress" />

context('Test Spec', () => {
    const waitTime = Math.floor((Math.random() * 10) + 1000);

    before(() => {
        cy.clearCookies()
        cy.visit('https://instagram.com')
    })

    it.skip('get login field', () => {
        cy.get('[name="username"]').type('')
        cy.get('[name="password"]').type('')
        cy.get('.sqdOP > .Igw0E').click({ force: true })
        cy.wait(waitTime)

        // clear save login info message
        cy.get('button').should('contain.text', 'Not Now').last().click()
        cy.wait(waitTime)

        // clear turn on notifications message
        cy.get('button').should('contain.text', 'Not Now').last().click()
    })
})
