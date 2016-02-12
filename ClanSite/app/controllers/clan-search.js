import Ember from 'ember';

export default Ember.Controller.extend({
    searchVal: '',
    actions: {
        search(val){
            console.log(val);
        }
    }
});
