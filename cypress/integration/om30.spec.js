describe('Login e Senha Teste', function() {
    beforeEach(function()  {
        
        cy.visit('https://homologacao.saudesimples.net')
    })
    it.only('Entrar na pagina om30', function()  {
        cy.get('#usuario_login').type('produtos')
        cy.get('#usuario_password').type('produtos10203040@')


        cy.get('.btn').click()   
})
})