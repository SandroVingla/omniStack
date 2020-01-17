const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')


module.exports = {
    async index(request, response){
        const { latitude, longitude, techs } = request.query

        const techsArray = parseStringAsArray(techs)

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coodinates: [longitude, latitude],
                    },
                    $maxDistances: 10000,
                }
            }
        })
        //busca todos os devs num raio de 10 km
        //filtrar por tecnologias
        return response.json({ devs:[]})
    }
}