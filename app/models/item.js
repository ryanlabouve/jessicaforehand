import DS from 'ember-data';

var Item = DS.Model.extend({
  name: DS.attr('string'),
  cover: DS.attr('string'),
  description: DS.attr('string'),

  project: DS.attr('belongsTo')
});

Item.reopenClass({
  FIXTURES: [
    {
        id: 1,
        name: "",
        cover: "img/art-ghost/ForehandJessica-6.jpg",
        description: "",
        project: 1
    },
    {
        id: 2,
        name: "Item 2",
        cover: "http://placehold.it/1200x600",
        description: "bobs",
        project: 1
    },
  ]
});

export default Item;
