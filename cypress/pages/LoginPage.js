export class LoginPage {
    visit() {
        cy.visit('/customer/account/login/', {
            retryOnStatusCodeFailure: true,
            timeout: 20000
        })
        return this
    }

    verifyPageLoaded() {
        cy.get('body').should('be.visible')
        cy.get('h1.page-title').should('contain', 'Customer Login')
        return this
    }

    fillCredentials(email, password) {
        cy.get('#email', { timeout: 10000 })
            .should('be.visible')
            .clear()
            .type(email)
        
        cy.get('#pass')
            .should('be.visible')
            .clear()
            .type(password)
        return this
    }

    submit() {
        cy.get('button[title="Sign In"], button.action.login.primary', { timeout: 10000 })
            .first()
            .should('be.visible')
            .click({ force: true })
        return this
    }

    verifySuccess() {
        cy.get('.page-title-wrapper', { timeout: 15000 })
            .should('contain', 'My Account')
        return this
    }
}

export const loginPage = new LoginPage()