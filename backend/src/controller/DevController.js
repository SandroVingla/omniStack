const axios = require('axios');
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')


module.exports = {

    async index(request, response){
        const devs = await Dev.find()
        return response.json(devs)

    },



    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body
        
        const apiResponse = await axios.get(`http://api.github.com/users/${github_username}`)

        let dev = await Dev.findOne({ github_username })

        if(!dev){
            const {name = login, avatar_url, bio } = apiResponse.data
        
            const techsArray = parseStringAsArray(techs)
            
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
            
             dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })


        }
        
       
        
        //console.log(name, avatar_url, bio, github_username)
        return response.json(dev)
        }
}