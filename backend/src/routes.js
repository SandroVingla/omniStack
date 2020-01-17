const { Router } = require('express')
const DevController =require('./controller/DevController')
const searchController = require('./controller/searchController')
const routes = Router()

routes.get('/devs', DevController.index)

routes.post('/devs', DevController.store)
routes.get('/search', searchController.index)


module.exports = routes