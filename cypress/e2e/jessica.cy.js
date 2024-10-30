///<reference types="cypress"/>
import produtosPage from "../support/page_objects/nome-funcionliada.page";

describe('Funcionalidade Login', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login('aluno_ebac@teste.com', 'teste@teste.com')
        produtosPage.visitarUrl()
        
    });
    
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Aether Gym Pant')
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        
    });


})