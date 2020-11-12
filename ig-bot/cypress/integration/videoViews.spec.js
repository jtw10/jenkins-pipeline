/// <reference types="cypress" />
// import * as userData from '../fixtures/creds.json'

userData.users.forEach(user => {
    context('Window', () => {
        const waitTime = Math.floor((Math.random() * 10) + 1000)
        const viewTime = 5500
    
        before(() => {
            cy.log(user.username)
            cy.clearCookies()
            cy.visit('https://www.instagram.com/accounts/login/')
        })
    
        it(`video views - account: ${user.username}`, () => {
            // log user in
            // cy.get('[name="username"]').type(user.username)
            // cy.get('[name="password"]').type(user.password)
            // cy.get('.sqdOP > .Igw0E').click({ force: true })
            // cy.wait(waitTime)

            // clear save login info message
            // cy.get('button', { timeout: 10000 }).then(($b) => {
            //     if ($b.text().includes('Not Now')) {
            //         cy.get('button').should('contain.text', 'Not Now').last().click()
            //     }
            // })
            // cy.wait(waitTime)
        
            // clear turn on notifications message
            // cy.get('button', { timeout: 10000 }).then(($b) => {
            //     if ($b.text().includes('Not Now')) {
            //         cy.get('button').should('contain.text', 'Not Now').last().click()
            //     }
            // })
            // cy.wait(waitTime)

            // visit video
            // cy.visit('')
            cy.log(Cypress.env('testvar'))
            cy.wait(viewTime)

            // like post
            // cy.get('[aria-label="Like"]').click({ froce: true });
        })
    })
})
  