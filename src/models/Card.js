const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const CardSchema = new mongoose.Schema({
    youtubeId: {
        type: String,
        required: true,
        unique: true
    }
});

const Card = mongoose.model('Cards', CardSchema);
module.exports = Card;