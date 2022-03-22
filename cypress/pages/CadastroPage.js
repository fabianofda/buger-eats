

class cadastroPage{
    acessarCadastro(){
        cy.visit('/')

        cy.get('#page-home a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    preencheCadasto(entregador){
        cy.get('input[name="fullName"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[placeholder="CEP"]').type(entregador.endereco.cep)
        cy.get('input[type="button"][value="Buscar CEP"]').click()

        cy.get('input[placeholder="Número"]').type(entregador.endereco.numero)
        cy.get('input[placeholder="Complemento"]').type(entregador.endereco.complemento)

        cy.get('input[placeholder="Rua"]').should('have.value', entregador.endereco.rua)
        cy.get('input[placeholder="Bairro"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[placeholder="Cidade/UF"]').should('have.value', entregador.endereco.cidade_uf)

        cy.contains('.delivery-method li', entregador.metodo_entrega).click()
        cy.get('input[accept="image/*"]').selectFile(entregador.cnh, { force: true })
    }

    submeterCadastro(){
        cy.get('form button[type="submit"]').click()

    }

    validarCadastro(mensagemEsperada){
        cy.get('.swal2-html-container').should('have.text', mensagemEsperada)
    
    }

    validarMensagemAlerta(mensagemEsperada){
        cy.get('.alert-error').should('have.text', mensagemEsperada)
    }

    validarMensagemErro(mensagemEsperada){
        cy.contains('.alert-error', mensagemEsperada).should('be.visible')
    }

}

export default new cadastroPage;