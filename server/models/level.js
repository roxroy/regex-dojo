const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const levelSchema = new Schema({
    title: String,
    description: String,
    picture: String,
    techniques: [{
        meta: String,
        description: String
    }],
    opponents: {
        spar: String,
        fight: String
    },
    belt: String
});

module.exports = mongoose.model('Level', levelSchema);
