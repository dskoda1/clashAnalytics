import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	namespace: 'api',
	host: 'https://clan-site-dskoda1.c9users.io:8081'
});
