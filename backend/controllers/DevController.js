const axios = require('axios');   //biblioteca que se comunica com outras apis
const Dev = require('../models/Dev');
const { index } = require('../models/utils/PointSchema');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
 //index, show, store, update, delete

 async index(request, response){
     const devs = await Dev.find();
     
     return response.json(devs);
 },

async store (request, response){  //cadastrar um dev

        const {github_username, techs, latitude, longitude} = request.body;
        let dev = await Dev.findOne({github_username});

        if(!dev){
            console.log(github_username);
    
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
            const {name = login,avatar_url,bio} = apiResponse.data;
        
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }    


        return response.json(dev); //pode ser um vetor ou um vetor no json
} 
}