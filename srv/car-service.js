module.exports = class say {

    hello(req) {

        var mensaje = "Hola cuanto tiempo " + req.data.to;

        return mensaje;
    }

    suma(req) {
        return req.data.num1 + req.data.num2;
    }

    async getRickYMortyData() {

        var getData = function () {
            return new Promise(resolve => {
                var request = require('request');
                var options = {
                    'method': 'GET',
                    'url': 'https://rickandmortyapi.com/api/character/',
                    'headers': {
                    }
                };
                request(options, function (error, response) {
                    if (error) throw new Error(error);
                    resolve(response.body);
                });
            })
        }
        const data = await getData();

        return data;
    }
}