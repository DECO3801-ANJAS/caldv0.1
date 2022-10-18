const frontendURL = Cypress.env("frontendURL");

beforeEach(function setUser() {
  cy.visit(`${frontendURL}/create`);
});

describe("Test it is in the correct page", () => {

  it("Test whether 'Create a' text exists or not", () => {
    cy.get('[data-testid=create-a-text-in-create-event-page]').should("exist");
  });

  it("Test whether 'New Event' text exists or not", () => {
    cy.get('[data-testid=new-event-text-in-create-event-page]').should("exist");
  });

  it("Test whether 'Title' input exists or not", () => {
    cy.get('[data-testid=title-input-in-create-event-page]').should("exist");
  });

  it("Test whether 'Description' input exists or not", () => {
    cy.get('[data-testid=description-input-in-create-event-page]').should("exist");
  });

  it("Test whether 'Location' input exists or not", () => {
    cy.get('[data-testid=location-input-in-create-event-page]').should("exist");
  });

  it("Test whether 'Date' input exists or not", () => {
    cy.get('[data-testid=date-input-in-create-event-page]').should("exist");
  });

  it("Test whether 'Time' input exists or not", () => {
    cy.get('[data-testid=time-input-in-create-event-page]').should("exist");
  });

  it("Test whether 'Date' input exists or not", () => {
    cy.get('[data-testid=date-input-in-create-event-page]').should("exist");
  });

  it("Test whether 'Tasks' input exists or not", () => {
    cy.get('[data-testid=tasks-input]').should("exist");
  });

  it("Test whether 'Recipe Ingredients' input exists or not", () => {
    cy.get('[data-testid=recipe-ingredients-input-in-create-event-page]').should("exist");
  });

  it("Test whether 'Recipe Steps' input exists or not", () => {
    cy.get('[data-testid=recipe-steps-input-in-create-event-page]').should("exist");
  });

  it("Test whether 'Submit' button exists or not", () => {
    cy.get('[data-testid=submit-button-in-create-event-page]').should("exist");
  });
});

export {};
