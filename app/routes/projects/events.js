import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('project').then(function(projects) {
      return projects.filter(function(item, index, self) {
        if (item.get('type') == 'events') { return true;}
      });
    });
  }
});
