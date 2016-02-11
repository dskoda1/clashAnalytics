import mongoose from 'mongoose'


var UserSchema = new mongoose.Schema({

    name: String,
    role: String,
    expLevel: Number,
    league: Object,
    trophies: Object,
    clanRanke: Number,
    previousClanRank: Number,
    donations: Number,
    donationsRecieved: Number,

});

export default mongoose.model('User', UserSchema);
