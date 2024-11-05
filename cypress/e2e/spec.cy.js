//Step 1
describe('Broccoli Product Tests', () => {
  before(() => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
  });

//Step 2
  it('Should display Brocolli product in search results with count 1', () => {
    cy.get('input[type="search"]').type('Brocolli{enter}'); 
  
    cy.contains('Brocolli').should('be.visible');
    cy.contains('Brocolli')
      .parent()
      .find('.quantity')
      .should('have.value', '1');
;

//Step 4
    cy.contains('Brocolli')
      .get('.increment')
      .dblclick();
  
    cy.contains('Brocolli')
      .parent()
      .find('.quantity')
      .should('have.value', '3'); 

//Step 5
      cy.contains('Brocolli')
      .parent()
      .get('button')
      .contains('ADD TO CART')
      .click();

      // cy.contains('Brocolli')
      // .parent()
      // .find('button')
      // .should('contain.text', 'Added')
      // .and('be.visible');

      cy.contains('Brocolli')
      .parent()
      .get('button')
      .should('be.visible')
      .invoke('text')
      .should((text) => {
        expect(text).to.match(/Added|ADD TO CART/); 
      });

//Step 6,7,8 and 9
      cy.get('img[alt="Cart"]').click();
      cy.get('.cart-items').should('be.visible');
      cy.contains('.cart-items', 'Brocolli').should('be.visible');
      cy.contains('button', 'PROCEED TO CHECKOUT').click();
      cy.get('.products .product-name').contains('Brocolli - 1 Kg').should('be.visible');;

//Step 10,11
      cy.get('.promoCode').type('test');
      cy.get('.promoBtn').click();
      cy.wait(1050)
      cy.get('.promoInfo')
        .should('be.visible')
        .and('contain.text', 'Invalid code ..!');
  
// Step 12
      cy.contains('button', 'Place Order').click();
  
// Step 13
      cy.get('select').select('Armenia');
  
// Step 14
      cy.get('.chkAgree').check();//կամ input[type="checkbox"]
      cy.wait(1000)// Որ ավելի լավ տեսանելի լինի ընտրվածը
// Step 15
      cy.contains('button', 'Proceed').click();
  
// Step 16
cy.contains('span', 'Thank you').should('be.visible');
  
});
});
