/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    
    it('find out if search is working', () => {
      cy.get('.Origin')
        .type('New').should('have.value', 'New')
        cy.wait(3000)
      cy.get('.names-input-wrapper-list').find('div').should('have.length.at.least', 1)
 
    })
  
    it('find out if map is loaded ', () => {
        cy.wait(1000)
        cy.get('.calculator-map').should('be.visible');

    })

    it('find out if select is working ', () => {
      cy.wait(1000)

      cy.get('.results-left-type').should('be.visible');

      cy.get('.results-left-type').click({ force: true })
      cy.wait(150)
      cy.get('.results-left-list-item').should('be.visible')

  })

  })
  