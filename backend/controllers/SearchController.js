const Dev =  require('../models/Dev');

const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = { 
    async index(request, response){
        //Buscar todos devs num raio de 10KM
        // Filtrar por tecnologias
        const {latitude, longitude, techs} = request.query;
        const techsArray = parseStringAsArray(techs);


        //$in operator do mongodb
        //O $in operador seleciona os documentos onde o valor de um campo é igual a qualquer valor na matriz especificada
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude], //encontrar todos usuarios perto dessas coordenadas
                    },
                    $maxDistance:10000,                 //detecna coordenadas com 10km no máximo de  distancia
                },
            }
        });
        return response.json({devs});
    },


};
