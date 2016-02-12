var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({

    name: String,
    role: String,
    expLevel: Number,
    league: Object,
    trophies: Number,
    clanRanke: Number,
    previousClanRank: Number,
    donations: Number,
    donationsRecieved: Number,

});

module.exports = mongoose.model('User', UserSchema);
