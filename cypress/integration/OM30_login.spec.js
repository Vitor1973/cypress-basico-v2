describe('Login ambiente desenvolvimento', function() {
    beforeEach(function() {
        cy.visit('https://desenvolvimento.om30.cloud/usuarios/login')
    })
    it('Fazer login na pagina om30', function() {
       cy.get('#usuario_login').type('produtos');
       cy.get('#usuario_password').type('Produtos10203040');

       cy.get('.btn').click()
       cy.get('.btn').should('be.visible')
    })
})