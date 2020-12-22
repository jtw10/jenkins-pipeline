/// <reference types="cypress" />
import * as userData from '../fixtures/creds.json'

userData.users.forEach(user => {
    context('Check Followers', () => {
        console.log(userData)
        const waitTime = Math.floor((Math.random() * 10) + 1000)
        let followersList = ''
        let followingList = ''
    
        before(() => {
            cy.log(user.username)
            cy.clearCookies()
            cy.visit('https://www.instagram.com/accounts/login/')
        })
    
        it(`login - account: ${user.username}`, () => {
            // log user in
            cy.get('[name="username"]').type(user.username)
            cy.get('[name="password"]').type(user.password)
            cy.get('.sqdOP > .Igw0E').click({ force: true })
            cy.wait(waitTime)

            // clear save login info message if it exists
            cy.get('button', { timeout: 10000 }).then(($b) => {
                if ($b.text().includes('Not Now')) {
                    cy.get('button').should('contain.text', 'Not Now').last().click()
                }
            })
            cy.wait(waitTime)
        
            // clear turn on notifications message if it exists
            cy.get('button', { timeout: 10000 }).then(($b) => {
                if ($b.text().includes('Not Now')) {
                    cy.get('button').should('contain.text', 'Not Now').last().click()
                }
            })
            cy.wait(waitTime)

            // navigate to user profile and check followers
            cy.visit(`https://www.instagram.com/${user.username}/`)
            cy.get(':nth-child(2) > .-nal3').click()
            cy.contains('followers').should('be.visible')
            
            // loop to load all followers
            // TODO: adjust number of loops by considering total number of followers
            for(let i = 0; i < 25; i++) {
                cy.get('[class="FPmhX notranslate  _0imsa "]').last().scrollIntoView()
                cy.wait(1500)
            }
            cy.get('[class="FPmhX notranslate  _0imsa "]').invoke('text').then((text) => {
                cy.log(text + ',')
                followersList = text
            })

            // navigate to user profile and check following
            cy.visit(`https://www.instagram.com/${user.username}/`)
            cy.get(':nth-child(3) > .-nal3').click()
            cy.contains('following').should('be.visible')
            
            // loop to load all following
            // TODO: adjust number of loops by considering total number of following
            for(let i = 0; i < 25; i++) {
                cy.get('[class="FPmhX notranslate  _0imsa "]').last().scrollIntoView()
                cy.wait(1500)
            }
            cy.get('[class="FPmhX notranslate  _0imsa "]').invoke('text').then((text) => {
                cy.log(text + ',')
                followingList = text
            })
        })

        it('check followers', () => {
            // compare difference between following and followers
            const diff = (diffMe, diffBy) => diffMe.split(diffBy).join('')
            const C = diff(followersList, followingList)
            cy.log(followersList)
            cy.log(followingList)

            // log difference between following and followers
            cy.log(C)

            // TODO: write to db
        })
    })
})
