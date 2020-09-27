const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
        thumbnail: String,
        company: String,
        minimum_price: Number,
        description: String,
        city: String,
        state: String,
        observations: [String],
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    });

module.exports = mongoose.model('Spot', SpotSchema);