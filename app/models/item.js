import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  cover: DS.attr('string'),
  description: DS.attr('string'),

  project: DS.attr('belongsTo')
});
