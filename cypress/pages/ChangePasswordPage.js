export class ChangePasswordPage {
    elements = {
        changePasswordLink: () => cy.get('a[href*="account/edit/changepass"]'),
        currentPassword: () => cy.get('#current-password'),
        newPassword: () => cy.get('#password'),
        confirmNewPassword: () => cy.get('#password-confirmation'),
        saveBtn: () => cy.get('button[title="Save"]'),
        successMessage: () => cy.get('[data-ui-id="message-success"]')
    }

    navigate() {
        this.elements.changePasswordLink().should('be.visible').click()
        cy.get('h1.page-title').should('contain', 'Change Password')
    }

    changePassword(currentPass, newPass) {
        this.elements.currentPassword().should('be.visible').type(currentPass)
        this.elements.newPassword().should('be.visible').type(newPass)
        this.elements.confirmNewPassword().should('be.visible').type(newPass)
        this.elements.saveBtn().should('be.visible').click()
    }
}

export const changePasswordPage = new ChangePasswordPage()