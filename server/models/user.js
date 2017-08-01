const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    githubId: String,
    username: String,
    avatarUrl: String,
    fightData: {
        fightsWon: { type: Number, default: 0 },
        fightsLost: { type: Number, default: 0 },
        sparCount: { type: Number, default: 0 },
        belts: { type: Array, default: [] }
    },
},
{
    toObject: { getters: true },
    timestamps: {
        createdAt: 'createdDate',
        updatedAt: 'updatedDate'
    },
}    
);

module.exports = mongoose.model('User', userSchema);
