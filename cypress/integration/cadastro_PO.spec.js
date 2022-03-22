import cadastro from '../pages/CadastroPage'

describe('Cadastro com page object', function () {

    it('Deve cadastrar entregador com sucesso', function () {
        
        var entregador = {
            nome: 'Fabiano Dias',
            cpf: '00000030007',
            email: 'teste@teste.com',
            whatsapp: '11988888888',
            endereco: {
                cep: '06382090',
                rua: 'Rua Yukio Wada',
                numero: '0005',
                complemento: 'CASA 001',
                bairro: 'Vila Silviânia',
                cidade_uf: 'Carapicuíba/SP'
            },
            metodo_entrega: 'Van/Carro',
            cnh: 'cypress/fixtures/images/cnh-digital.jpg'
        }

        cadastro.acessarCadastro()
        cadastro.preencheCadasto(entregador)
        cadastro.submeterCadastro()

        const mensagemEsperada =  'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        cadastro.validarCadastro(mensagemEsperada)
    
    })

    it('Deve validar cpf invalido', function () {

        var entregador = {
            nome: 'Fabiano Dias',
            cpf: '00000000000',
            email: 'teste@teste.com',
            whatsapp: '11988888888',
            endereco: {
                cep: '06382090',
                rua: 'Rua Yukio Wada',
                numero: '0005',
                complemento: 'CASA 001',
                bairro: 'Vila Silviânia',
                cidade_uf: 'Carapicuíba/SP'
            },
            metodo_entrega: 'Van/Carro',
            cnh: 'cypress/fixtures/images/cnh-digital.jpg'
        }   

        cadastro.acessarCadastro()
        cadastro.preencheCadasto(entregador)
        cadastro.submeterCadastro()

        cadastro.validarMensagemAlerta('Oops! CPF inválido')
    
    })

    it('Deve validar campos obrigatorios', function () {
        
        cadastro.acessarCadastro()
        cadastro.submeterCadastro()
        
        const mensagemEsperada =  'É necessário informar o nomeÉ necessário informar o CPFÉ necessário informar o emailÉ necessário informar o CEPÉ necessário informar o número do endereçoSelecione o método de entregaAdicione uma foto da sua CNH'
        cadastro.validarMensagemAlerta(mensagemEsperada)

    })

    it('Deve validar email com formato invalido', function () {

        var entregador = {
            nome: 'Fabiano Dias',
            cpf: '00000014141',
            email: 'qa.teste.com',
            whatsapp: '11988888888',
            endereco: {
                cep: '06382090',
                rua: 'Rua Yukio Wada',
                numero: '4321',
                complemento: 'CASA 001',
                bairro: 'Vila Silviânia',
                cidade_uf: 'Carapicuíba/SP'
            },
            metodo_entrega: 'Van/Carro',
            cnh: 'cypress/fixtures/images/cnh-digital.jpg'
        }   

        cadastro.acessarCadastro()
        cadastro.preencheCadasto(entregador)
        cadastro.submeterCadastro()

        cadastro.validarMensagemAlerta('Oops! Email com formato inválido.')
    
    })
})