/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/');

});

it('Changing the DOM', () => {

  cy
    .get('[data-cy="star"]')
   // .click({force:true})
    .invoke('show')
})

it('Example 2', () => {

  cy.visit('/board/2305140181')
    .get('[data-cy="task"]')
    .eq(0)
    .invoke('addClass','overDue')
   // .click({force:true})
})
