const {Router} = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const updateController = require('./controllers/updateController');

const routes = Router();

routes.get('/devs', DevController.index); //rotas para buscar rotas
routes.post('/devs', DevController.store); //rota para criar um dev
routes.get('/search', SearchController.index);

routes.put('/update', updateController.update);

routes.delete('/update', updateController.delete);

module.exports = routes;