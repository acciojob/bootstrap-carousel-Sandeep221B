describe('Carousel Controls', () => {
  it('should click next and previous buttons', () => {
    cy.visit('your-carousel-page.html');  // Replace with your URL

    // Ensure the carousel control buttons are visible
    cy.get('.carousel-control-next').should('be.visible');
    cy.get('.carousel-control-prev').should('be.visible');

    // Click next and previous buttons
    cy.get('.carousel-control-next').click();
    cy.get('.carousel-control-prev').click();
  });
});
