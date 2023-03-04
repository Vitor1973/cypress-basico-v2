describe('Login Saude Simples', function() {
    beforeEach(function()  {
        
        cy.visit('https://desenvolvimento.om30.cloud')
    })
    it.only('Entrar na pagina om30', function()  {
        //cy.get('#usuario_login').type('produtos')
        cy.get('#usuario_login').type('produtos'); // argumentos
        cy.get('#usuario_password').type('Produtos10203040');


        cy.get('.btn').click() 
        cy.get('.btn').should('be.visible')  
})
    it('Pesquisar Agendamento', function() {
        cy.get('#menu-pai-26 > [href="javascript:void(0)"] > .site-menu-title').click
    })
})