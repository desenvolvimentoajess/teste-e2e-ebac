class ProdutosPage {

    visitarUrl(){
        cy.visit('produtos')
    }

    buscarProdutoLista(nomeProduto){
        cy.get('.product-block')
        .contains(nomeProduto)
        .click()
        cy.get('.button-variable-item-32').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(4)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
    }


}

export default new ProdutosPage()
