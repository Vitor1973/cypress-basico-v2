describe('Login Saude Simples', function() {
    beforeEach(function()  {
        
        cy.visit('https://homologacao.saudesimples.net/usuarios/login')
    })
    it('Entrar na pagina om30', function()  {
        //cy.get('#usuario_login').type('produtos')
        cy.get('#usuario_login').type('produtos');
        cy.get('#usuario_password').type('produtos10203040@')


        cy.get('.btn').click()   
})
})