import { signupPage } from '../../pages/SignupPage'
import { loginPage } from '../../pages/LoginPage'

describe('Magento Authentication Flow - Part 1/2', () => {
    const testUser = {
        firstName: 'Test',
        lastName: 'User',
        email: `user${Date.now()}@test.com`,
        password: 'Test@12345'
    }

    before(() => {
        Cypress.env('registeredUser', testUser)
    })

    it('1. Should successfully sign up a new user', () => {
        cy.log('Starting signup test...')
        signupPage.visit()
            .verifyPageLoaded()
            .fillForm(testUser)
            .submit()
            .verifySuccess()
        cy.screenshot('after-signup', { capture: 'viewport' })
    })

    it('2. Should login with the newly created account', function() {
        const user = Cypress.env('registeredUser')
        
        cy.log('Starting login test...')
        
        // 1. Ensure clean state
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('/customer/account/logout')
        cy.get('body').should('be.visible')
        
        // 2. Go to login page
        loginPage.visit()
            .verifyPageLoaded()
        cy.screenshot('login-page', { capture: 'viewport' })

        // 3. Fill and submit form
        loginPage.fillCredentials(user.email, user.password)
        cy.screenshot('login-form-filled', { capture: 'viewport' })
        loginPage.submit()

        // 4. Verify login success
        loginPage.verifySuccess()
        cy.get('.greet.welcome')
            .should('contain', 'Welcome')
            .then(() => {
                cy.screenshot('after-login', { capture: 'viewport' })
            })

        // 5. Additional verification
        cy.get('.box-information .box-content > p')
            .should('contain', user.email)
    })
})