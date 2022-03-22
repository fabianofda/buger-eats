import cadastro from '../pages/CadastroPage'

describe('Cadastro com page object e gancho fixtures', function () {

    beforeEach(function () {
        cy.fixture('cadastro').then(function (c) {
            this.cadastro = c
        })
    })

    it('Deve cadastrar entregador com sucesso', function () {

        cadastro.acessarCadastro()
        cadastro.preencheCadasto(this.cadastro.cadastro_entregador)
        cadastro.submeterCadastro()

        const mensagemEsperada = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        cadastro.validarCadastro(mensagemEsperada)
    })

    it('Deve validar cpf invalido', function () {

        cadastro.acessarCadastro()
        cadastro.preencheCadasto(this.cadastro.cpf_invalido)
        cadastro.submeterCadastro()

        cadastro.validarMensagemAlerta('Oops! CPF inválido')
    })

    it('Deve validar campos obrigatorios', function () {

        cadastro.acessarCadastro()
        cadastro.submeterCadastro()

        const mensagemEsperada = 'É necessário informar o nomeÉ necessário informar o CPFÉ necessário informar o emailÉ necessário informar o CEPÉ necessário informar o número do endereçoSelecione o método de entregaAdicione uma foto da sua CNH'
        cadastro.validarMensagemAlerta(mensagemEsperada)
    })

    it('Deve validar email com formato invalido', function () {

        cadastro.acessarCadastro()
        cadastro.preencheCadasto(this.cadastro.email_invalido)
        cadastro.submeterCadastro()

        cadastro.validarMensagemAlerta('Oops! Email com formato inválido.')
    })
})