/*global app Backbone */

app.models = app.models || {};

class User extends Backbone.Model{
    
    //Define some defaults
    defaults () {
        return {
            name: "",
            role: "",
            expLevel: 0,
            league: {},
            trophies: {},
            clanRank: 0,
            previousClanRank: 0,
            donations: 0,
            donationsRecieved: 0,
        }
    }
    
    initialize (options) {
    }
}
app.models.user = User;