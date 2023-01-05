describe('Alura busca cursos', function () {
    beforeEach(function() {
        cy.visit('https://www.alura.com.br');
    })
    it.only('Buscar curso de JavaScript', function() {

        cy.get('#hs-eu-confirmation-button').click()
        cy.get('#header-barraBusca-form-campoBusca').type('Javascript');
        cy.get('.header-barraBusca-form-submit').click()

        cy.get(':nth-child(1) > .busca-resultado-link > .busca-resultado-icone').should('be.visible')
        
    });

})