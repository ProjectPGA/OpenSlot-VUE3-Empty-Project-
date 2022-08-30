/// <reference types="cypress" />

describe('example counter app', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/');
  });

  it('displays two todo items by default', () => {
    cy.get('.button').should('be.visible');
  });
});
