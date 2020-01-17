const { Router } = require('express')
const axios = require('axios')
const Dev = require('./model/Dev')
const DevController = require('./controller/DevController')
const SearchController = require('./controller/SearchController')
const parseStringAsArray = require('./utils/parseStringAsArray')

const routes = Router();

// Tipos de parâmetros: 
// Query Params - req.query (filtros, ordenação, paginação, ...)
// Route Params - req.params (identificar um recurso na alteração ou remoção)
// Body - req.body (dados para criação ou alteração de um registro)
routes.get('/devs', DevController.index)
routes.get('/search', SearchController.index)

routes.post('/devs', DevController.store)

module.exports = routes