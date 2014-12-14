import DS from 'ember-data';

var Project = DS.Model.extend({
  name: DS.attr('string'),
  thumbnail: DS.attr('string'),
  cover: DS.attr('string'),
  type: DS.attr('string'),
  description: DS.attr('string'),
  // items: DS.belongsTo('item')
});

Project.reopenClass({
  FIXTURES: [
    {
        id: 1,
        name: "Project 1",
        thumbnail: "http://placehold.it/400x300",
        cover: "http://placehold.it/1200x400",
        type: "photo",
        description: "Vero amet modi dicta autem aut ut. Occaecati iste deleniti dolores deleniti dolorem quia. Ut eos quas fuga ex libero et. Unde aspernatur maiores excepturi eum vero."
    },
    {
        id: 2,
        name: "Project 2",
        thumbnail: "http://placehold.it/400x300",
        cover: "http://placehold.it/1200x400",
        type: "photo",
        description: "Amet enim minus eos ipsa veniam cum perspiciatis accusamus. Ab dicta dolor est. Blanditiis nostrum fugiat iure dolores qui ad. Et sit maiores at dignissimos."
    },
]
});

export default Project;
