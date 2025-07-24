export class DashboardPage {
    elements = {
        accountDropdown: () => cy.get('.customer-name button.action.switch, [data-action="customer-menu-toggle"]').first(),
        signOutLink: () => cy.get('a[href*="/customer/account/logout"], .authorization-link a').first(),
        pageHeader: () => cy.get('.page-title')
    }

    openAccountDropdown() {
        cy.get('body').should('be.visible')
        this.elements.accountDropdown()
            .should('be.visible')
            .click({ force: true })
        return this
    }

    clickSignOut() {
        this.elements.signOutLink()
            .should('be.visible')
            .click({ force: true })
        return this
    }

    verifySignedIn() {
        cy.get('body').should('be.visible')
        this.elements.pageHeader()
            .should('contain', 'My Account')
        return this
    }
}

export const dashboardPage = new DashboardPage()