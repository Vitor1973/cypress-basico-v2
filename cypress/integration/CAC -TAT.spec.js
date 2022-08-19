
/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function()  {
        cy.visit('./src/index.html')
    })

    it('verifica o titulo da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it.only('preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'djdjdjdjdjdjdjdjdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj'
        cy.get('#firstName').type('Vitor Hugo')
        cy.get('#lastName').type('Devechi')
        cy.get('#email').type('vitorhugo@gmail.com')
        cy.get(':nth-child(3) > input').click()
        cy.get('#open-text-area').type(longText, { delay: 0})
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')

    })

    it('exibe uma mensagem de erro ao submeter o formulario com um email com formato inválido', function() {
        cy.get('#firstName').type('Vitor Hugo')
        cy.get('#lastName').type('Devechi')
        cy.get('#email').type('vitorhugo@gmail67com')
        cy.get(':nth-child(3) > input').click()
        cy.get('#open-text-area').type('Textão!!!!!!!!!!!!!')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')

    })
})
