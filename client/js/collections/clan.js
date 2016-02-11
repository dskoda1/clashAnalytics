/*global app, Backbone, _ */

app.collections = app.collections || {};

class Clan extends Backbone.Collection {

    constructor(options) {
        super(options);


        this.model = app.models.user;
        this.clanTag = options.clanTag;
        _.bindAll(this, 'fetch');

    }

    fetch() {
        $.getJSON(app.apiUrl + "%23PVLU9G9/members",
        function(data) {
        console.log(data); 
        }); 
        // $.get(app.apiUrl + "%23PVLU9G9/members", 
        //     function(response) {
        //         alert("success");
        //         console.log(response)
        //     })
        //     .done(function(response) {
        //         alert("second success");
        //         console.log(response)

        //     })
        //     .fail(function(response) {
        //         alert("error");
        //         console.log(response)

        //     })

    }

}
app.collections.clan = Clan;