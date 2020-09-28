const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const { state, city } = req.query;
        
        const spots = await Spot.find({ states: state, cities: city});

        return res.json(spots);
    },

    async store(req, res) {
        const { filename } = req.file;
        const { company, minimum_price, description, observations, city, state   } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: 'Usuário inexistente.' });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            minimum_price,
            observations: observations.split(',').map(observations => observations.trim()),
            description,
            city,
            state
        })
        return res.json(spot)
    }
};
