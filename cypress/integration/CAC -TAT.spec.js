
/// <reference types="Cypress" />  \\\ Refiz a aula pois deu algum problema no meu primeiro pasta de testes
/// Instalando o cypress pelo terminal comando: npm install cypress@9.5.1 --save-dev

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function()  {
        cy.visit('./src/index.html')
        //cy.visit('https://automacao-vitao.netlify.app')
    })

    it.only('verifica o titulo da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
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
    it('exibe uma mensagem de erro ao submeter o formulario com um email com formato inválido', function() {
        cy.get('#firstName').type('Vitor Hugo')
        cy.get('#lastName').type('Devechi')
        cy.get('#email').type('vitorhugo@gmail67com')
        cy.get(':nth-child(3) > input').click()
        cy.get('#open-text-area').type('Textão!!!!!!!!!!!!!')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')

    })
     
    it('Fazer automação da pagina dos minions', function(){
        cy.get('#Email').type('devechi.victor@hotmail.com')
        cy.get('#Senha').type('vec242526')
        cy.get('#enviar').click()
    })
    
    it('preenche os campos obrigatórios e enviar o formulário', function(){
        cy.get('#firstName').type('Maria')
        cy.get('#lastName').type('Pereira')
        cy.get('#email').type('vvv@gmail.com')
        cy.get('#phone').type('11 98989-9658')
        cy.get('#open-text-area').type('Teste Teste Teste')
        cy.get('button[type="submit"]').click()
        
        cy.get('.success').should('be.visible')
    })
})
