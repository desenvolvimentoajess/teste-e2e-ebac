/// <reference types="cypress" />
import produtosPage from "../support/page_objects/nome-funcionliada.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

      beforeEach(() => {
        cy.visit('minha-conta')
        cy.login('aluno_ebac@teste.com', 'teste@teste.com')
        produtosPage.visitarUrl()
        
    });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    produtosPage.buscarProdutoLista('Aether Gym Pant')
    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
  });


})