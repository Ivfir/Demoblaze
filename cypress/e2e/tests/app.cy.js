import LoginPage from '../pages/LoginPage';
import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';

describe('User Login and Add to Cart Tests', () => {
    beforeEach(() => {
        cy.visit('https://demoblaze.com');
    });

    it('should login and add a product to the cart successfully', () => {
        LoginPage.openLoginModal();
        LoginPage.enterUsername('Test_example'); 
        LoginPage.enterPassword('Test@123'); 
        LoginPage.submit();
        HomePage.getWelcomeMessage().should('contain', 'Welcome Test_example');
        HomePage.isLogoutButtonVisible();
        cy.get('.modal-content').should('not.be.visible');
        cy.contains('Samsung galaxy s6').click();
        cy.contains('Add to cart').click();
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Product added');
        });
        CartPage.openCart();
        CartPage.isProductInCart('Samsung galaxy s6');
    });
});
