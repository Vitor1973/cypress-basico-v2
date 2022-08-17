
/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function()  {
        cy.visit('./src/index.html')
    })

    it('verifica o titulo da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it.only('preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').type('Vitor Hugo')
        cy.get('#lastName').type('Devechi')
        cy.get('#email').type('vitorhugo@gmail.com')
        cy.get('#open-text-area').type('Hoje eu inicio um novo ciclo nesta maravilhosa empresa.')
        cy.get('button[type="submit"]').click()

    })
})
