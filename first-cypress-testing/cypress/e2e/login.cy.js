/// <reference types="cypress" />

describe('Working with inputs', () => {
   it('Should load the website', () => {
       cy.visit('http://zero.webappsecurity.com/login.html');
       cy.url().should('include', 'login.html');

      //  cy.pause();
   });

   it("Should fill username", () => {
    cy.get('#user_login').clear();
    cy.get('#user_login').type('username');
   });

   it('Should fill password', () => {
       cy.get('input[name="user_password"]').clear();
       cy.get('input[name="user_password"]').type('passowrd');
   });

   it('Should checklist keep me signed in', () => {
       cy.get('input[type="checkbox"]').check();
   });

   it('Should click button Sign in', () => {
      cy.get('input[name="submit"]').click();
   });
});