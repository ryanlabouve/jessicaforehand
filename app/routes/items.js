import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var id = this.modelFor('projects.show').get('id');
    return this.modelFor('projects.show').store.find('item').then(function(items) {
      return items.filter(function(item, index, self) {
        if (item.get('project') == id) { return true;}
      });
    });
  }
});
