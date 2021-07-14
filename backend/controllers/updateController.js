const Dev =  require('../models/Dev');


module.exports = {
    async update(request, response){
        const {github_username, bio, avatar_url} = request.body;   //pego os dados do navegardor
         //verifico se o usuário cadastrado estar no BD
        
        let dev = await Dev.findOne({github_username});
        if(dev){
            const devs = await dev.updateOne({      //atualizo os dados
                $set:{
                   bio,
                   avatar_url,
                },
            });
         }
       
        

        return response.json({Dev});   
    
    },

    async delete(request,response){
        const {github_username} = request.body;   //pego os dados do navegardor
        let dev = await Dev.findOne({github_username});
        if(dev){
            const devs = await Dev.deleteOne({
                github_username,
    });
}
        return response.json({Dev});
    },


};