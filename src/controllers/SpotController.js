const Spot = require('../models/Spot');

module.exports = {
    async store(req, res) {
        const { filename } = req.file;
        
        return res.json({ ok: true})
    }
};