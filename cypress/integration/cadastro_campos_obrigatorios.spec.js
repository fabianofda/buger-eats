import cadastro from '../pages/CadastroPage'

describe('Cadastro com page object', function () {

    it('Deve validar campos obrigatorios', function () {

        cadastro.acessarCadastro()
        cadastro.submeterCadastro()

        cadastro.validarMensagemErro('É necessário informar o nome')
        cadastro.validarMensagemErro('É necessário informar o CPF')
        cadastro.validarMensagemErro('É necessário informar o email')
        cadastro.validarMensagemErro('É necessário informar o CEP')
        cadastro.validarMensagemErro('É necessário informar o número do endereço')
        cadastro.validarMensagemErro('Selecione o método de entrega')
        cadastro.validarMensagemErro('Adicione uma foto da sua CNH')/*  */
    })

    context('validar mensagem de campos obrigatorios', function () {

        const mensagens = [
            { campo: 'nome', saida: 'É necessário informar o nome' },
            { campo: 'cpf', saida: 'É necessário informar o CPF' },
            { campo: 'email', saida: 'É necessário informar o email' },
            { campo: 'cep', saida: 'É necessário informar o CEP' },
            { campo: 'numero', saida: 'É necessário informar o número do endereço' },
            { campo: 'metodo_entrega', saida: 'Selecione o método de entrega' },
            { campo: 'cnh', saida: 'Adicione uma foto da sua CNH' }
        ]

        before(function () {

            cadastro.acessarCadastro()
            cadastro.submeterCadastro()

        })

        mensagens.forEach(function (msg) {

            it(`${msg.campo} campos obrigatorios`, function () {
                cadastro.validarMensagemErro(msg.saida)
            })

        })
    })

})