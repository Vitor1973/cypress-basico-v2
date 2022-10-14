// automacao_vitao.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function()  {
        
        cy.visit('https://automacao-vitao.netlify.app')
    })
it.only('Entrar na pagina do vitor', function()  {
        cy.get('#Email').type('devechi.victor@hotmail.com')
        cy.get('#Senha').type('vec242526')
        cy.get('#Nome').type('Maria')
        cy.get('#Telefone').type('11 98888-8888')
        cy.get('#Cpf').type('142.230.999.61')
        cy.get('#Endereço').type('Rua tal, 500')

        cy.get('#enviar').click()

})
})