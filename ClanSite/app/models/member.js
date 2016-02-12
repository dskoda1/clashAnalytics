import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  role: DS.attr(),
  expLevel: DS.attr(),
  league: DS.attr(),
  trophies: DS.attr(),
  clanRank: DS.attr(),
  previousClanRank: DS.attr(),
  donations: DS.attr(),
  donationsRecieved: DS.attr(),
  
});
