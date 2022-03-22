

describe('Cadastro simples', function () {

    it('Deve cadastrar entregador com sucesso', function () {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats-qa.vercel.app')

        cy.get('#page-home a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

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

        cy.get('form button[type="submit"]').click()
        
        cy.get('.swal2-title').should('have.text', 'Aí Sim...')
        cy.get('.swal2-html-container').should('have.text', 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')
    

    })

    it('Deve validar cpf invalido', function () {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('#page-home a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

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

        cy.get('input[name="name"]').type(entregador.nome)
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

        cy.get('form button[type="submit"]').click()
        
        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')
       
    

    })

    it('Deve validar campos obrigatorios', function () {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats-qa.vercel.app')

        cy.get('#page-home a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        cy.get('form button[type="submit"]').click()
        
        cy.get('.alert-error').should('have.text', 'É necessário informar o nomeÉ necessário informar o CPFÉ necessário informar o emailÉ necessário informar o CEPÉ necessário informar o número do endereçoSelecione o método de entregaAdicione uma foto da sua CNH')

    })

    it('Deve validar email com formato invalido', function () {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats-qa.vercel.app')

        cy.get('#page-home a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Fabiano Dias',
            cpf: '00000014141',
            email: 'qa.teste.com',
            whatsapp: '11988888888',
            endereco: {
                cep: '06382090',
                rua: 'Rua Yukio Wada',
                numero: '1234',
                complemento: 'CASA 001',
                bairro: 'Vila Silviânia',
                cidade_uf: 'Carapicuíba/SP'
            },
            metodo_entrega: 'Van/Carro',
            cnh: 'cypress/fixtures/images/cnh-digital.jpg'
        }

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

        cy.get('form button[type="submit"]').click()
        
        cy.get('.alert-error').should('have.text', 'Oops! Email com formato inválido.')
    })
})