
import { CartLocators } from '../locators/CartLocators';

class CartPage {
    openCart() {
        cy.get(CartLocators.cartButton).click(); 
    }

    isProductInCart(productName) {
        cy.get(CartLocators.productRow) 
          .find(CartLocators.productName) 
          .should('contain', productName);
    }
}

export default new CartPage();
