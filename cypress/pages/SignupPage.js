export class SignupPage {
    visit() {
        cy.visit('/customer/account/create/', {
            retryOnStatusCodeFailure: true,
            timeout: 30000
        })
        return this
    }

    verifyPageLoaded() {
        cy.get('body').should('be.visible')
        cy.get('h1.page-title').should('contain', 'Create New Customer Account')
        return this
    }

    fillForm(user) {
        cy.get('#firstname').type(user.firstName)
        cy.get('#lastname').type(user.lastName)
        cy.get('#email_address').type(user.email)
        cy.get('#password').type(user.password)
        cy.get('#password-confirmation').type(user.password)
        return this
    }

    submit() {
        cy.get('button[title="Create an Account"]')
            .first()
            .click({ force: true })
        return this
    }

    verifySuccess() {
        cy.get('[data-ui-id="message-success"]', { timeout: 15000 })
            .should('contain', 'Thank you for registering')
        return this
    }
}

export const signupPage = new SignupPage()