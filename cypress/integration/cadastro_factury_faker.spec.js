import cadastro from '../pages/CadastroPage'
import cadastroFaker from '../factories/CadastroFaker'

describe('Cadastro com page object e gancho factury com faker', function () {

    it('Deve cadastrar entregador com sucesso', function () {

        var cadastrar = cadastroFaker.cadastrar()

        cadastro.acessarCadastro()
        cadastro.preencheCadasto(cadastrar)
        cadastro.submeterCadastro()

        const mensagemEsperada = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        cadastro.validarCadastro(mensagemEsperada)
    })

    it('Deve validar cpf invalido', function () {

        var cadastrar = cadastroFaker.cadastrar()
        cadastrar.cpf = '00000000000'

        cadastro.acessarCadastro()
        cadastro.preencheCadasto(cadastrar)
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

        var cadastrar = cadastroFaker.cadastrar()
        cadastrar.email = 'qa.teste.com'

        cadastro.acessarCadastro()
        cadastro.preencheCadasto(cadastrar)
        cadastro.submeterCadastro()

        cadastro.validarMensagemAlerta('Oops! Email com formato inválido.')
    })





    it('Deve cadastrar novo', function () {

        var cadastrar = cadastroFaker.cadastrar()

        cadastro.acessarCadastro()
        cadastro.preencheCadasto(cadastrar)
        cadastro.submeterCadastro()

        const mensagemEsperada = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        cadastro.validarCadastro(mensagemEsperada)
    })
})