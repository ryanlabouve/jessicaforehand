import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    console.dir(this.$())
    this.$().find(".item").first().addClass('active');
    this.$().carousel();
  }
});
