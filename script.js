describe("Carousel tests", () => {
  it("Should render Carousel with correct classes and id", () => {
    cy.get("#myCarousel").should("have.class", "carousel");
  });

  it("Should navigate to the next slide on right click", () => {
    cy.get(".right").click();
    cy.get(".fourth-slide").should("have.class", "active");
  });

  it("Should render the third slide as active by default", () => {
    cy.get(".third-slide").should("have.class", "active");
  });

  it("Should render the Carousel with sliding functionality", () => {
    cy.get("#myCarousel").should("have.class", "slide");
  });

  it("Should render previous and next icons correctly", () => {
    cy.get(".left").should("have.class", "carousel-control");
    cy.get(".right").should("have.class", "carousel-control");

    // Updated checks for Bootstrap 5
    cy.get(".carousel-control-prev-icon").should("exist");
    cy.get(".carousel-control-next-icon").should("exist");
  });

  it("Should navigate to the previous slide on left click", () => {
    cy.get(".left").click();
    cy.get(".second-slide").should("have.class", "active");
  });
});
