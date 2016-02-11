/*global app Backbone */


$(() => {
    
    app.Parthenon = new app.collections.clan({
       clanTag: '%23PVLU9G9' 
    });
    
    app.Parthenon.fetch();
    
})