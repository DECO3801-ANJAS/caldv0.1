const frontendURL = Cypress.env("frontendURL");

beforeEach(function setUser() {
  cy.visit(`${frontendURL}/event`);
});

describe("Test it is in the correct page", () => {

  it("Test whether 'Upcoming' text exists or not", () => {
    cy.get('[data-testid=upcoming-text-in-all-events-page]').should("exist");
  });

  it("Test whether 'Events' text exists or not", () => {
    cy.get('[data-testid=events-text-in-all-events-page]').should("exist");
  });

});

export {};
