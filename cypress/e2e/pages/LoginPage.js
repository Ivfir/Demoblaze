import { ProductLocators } from '../locators/ProductLocators';

class LoginPage {
    openLoginModal() {
        cy.get(ProductLocators.loginButton).click();
    }

    enterUsername(username) {
        cy.get(ProductLocators.loginUsername).type(username);
    }

    enterPassword(password) {
        cy.get(ProductLocators.loginPassword).type(password);
    }

    submit() {
        cy.get(ProductLocators.loginSubmit).click();
    }
}

export default new LoginPage();
