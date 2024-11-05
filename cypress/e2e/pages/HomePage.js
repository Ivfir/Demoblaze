class HomePage {
    getWelcomeMessage() {
        return cy.get('#nameofuser');
    }

    isLogoutButtonVisible() {
        cy.get('#logout2').should('be.visible');
    }
}

export default new HomePage();
