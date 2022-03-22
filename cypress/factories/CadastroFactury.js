

export default {

    cadastrar: function () {

        var data = {
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
        return data
    }
}