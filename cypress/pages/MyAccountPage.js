export class MyAccountPage {
    elements = {
        accountDropdown: () => cy.get('.customer-name button.action.switch'),
        signOutLink: () => cy.get('.customer-menu .authorization-link a'),
        dashboard: () => cy.get('.column.main').contains('My Account'),
        pageHeader: () => cy.get('.page-title')
    }

    verifyLoginSuccess() {
        this.elements.pageHeader().should('contain', 'My Account')
        this.elements.dashboard().should('be.visible')
    }

    signOut() {
        this.elements.accountDropdown().should('be.visible').click()
        this.elements.signOutLink().should('be.visible').click()
    }
}

export const myAccountPage = new MyAccountPage()