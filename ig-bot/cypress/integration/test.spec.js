/// <reference types="cypress" />

context('Window', () => {
  const waitTime = Math.floor((Math.random() * 10) + 1000);

  before(() => {
    cy.clearCookies()
    cy.visit('https://instagram.com')
  })

  it('get login field', () => {
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
