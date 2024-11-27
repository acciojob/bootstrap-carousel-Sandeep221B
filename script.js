describe('Carousel tests', () => {
  it('Should render next or previous icon', () => {
    // Check for previous icon
    cy.get('.carousel-control-prev-icon').should('exist');

    // Check for next icon
    cy.get('.carousel-control-next-icon').should('exist');
  });
});
