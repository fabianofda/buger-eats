var faker = require('faker')

export default {

    cadastrar: function () {

        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();

        var data = {
            nome: `${firstName} ${lastName}`,
            cpf: '00000030007',
            email: faker.internet.email(firstName),
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
        return data
    }
}