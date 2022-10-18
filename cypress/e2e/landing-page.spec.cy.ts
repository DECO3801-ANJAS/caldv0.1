const frontendURL = Cypress.env("frontendURL");

beforeEach(function setUser() {
  cy.visit(`${frontendURL}`);
});

describe("Test it is in the correct page", () => {
  it("Test whether logo exists or not", () => {
    cy.get('[data-testid=logo-at-landing-page]').should("exist");
  });

  it("Test whether create events button exists or not", () => {
    cy.get('[data-testid=create-event-button-at-landing-page]').should("exist");
  });

  it("Test whether see events button exists or not", () => {
    cy.get('[data-testid=see-events-button-at-landing-page]').should("exist");
  });

});

export {};
