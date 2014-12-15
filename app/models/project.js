import DS from 'ember-data';

var Project = DS.Model.extend({
  name: DS.attr('string'),
  thumbnail: DS.attr('string'),
  cover: DS.attr('string'),
  type: DS.attr('string'),
  description: DS.attr('string'),
  items: DS.hasMany('item')
});

Project.reopenClass({
  FIXTURES: [
    {
        id: 1,
        name: "Project 1",
        thumbnail: "http://placehold.it/400x300",
        cover: "http://placehold.it/1200x600",
        type: "photo",
        description: "Vero amet modi dicta autem aut ut. Occaecati iste deleniti dolores deleniti dolorem quia. Ut eos quas fuga ex libero et. Unde aspernatur maiores excepturi eum vero.",
        items: [
          // {
          //   id: 1,
          //   name: "Item 1",
          //   cover: "http://placehold.it/1200x600",
          //   description: "asdf asdf asdfasdf adsf",
          // }
        ]
    },
    {
        id: 2,
        name: "Project 2",
        thumbnail: "http://placehold.it/400x300",
        cover: "http://placehold.it/1200x600",
        type: "photo",
        description: "Amet enim minus eos ipsa veniam cum perspiciatis accusamus. Ab dicta dolor est. Blanditiis nostrum fugiat iure dolores qui ad. Et sit maiores at dignissimos.",
        items: []
    },
    {
        id: 3,
        name: "Project 3",
        thumbnail: "http://placehold.it/400x300",
        cover: "http://placehold.it/1200x600",
        type: "photo",
        description: "Amet enim minus eos ipsa veniam cum perspiciatis accusamus. Ab dicta dolor est. Blanditiis nostrum fugiat iure dolores qui ad. Et sit maiores at dignissimos.",
        items: []
    },
    {
        id: 4,
        name: "Project 4",
        thumbnail: "http://placehold.it/400x300",
        cover: "http://placehold.it/1200x600",
        type: "photo",
        description: "Amet enim minus eos ipsa veniam cum perspiciatis accusamus. Ab dicta dolor est. Blanditiis nostrum fugiat iure dolores qui ad. Et sit maiores at dignissimos.",
        items: []
    },
    {
        id: 5,
        name: "Project 5",
        thumbnail: "http://placehold.it/400x300",
        cover: "http://placehold.it/1200x600",
        type: "photo",
        description: "Amet enim minus eos ipsa veniam cum perspiciatis accusamus. Ab dicta dolor est. Blanditiis nostrum fugiat iure dolores qui ad. Et sit maiores at dignissimos.",
        items: []
    },
    {
        id: 6,
        name: "Project 6",
        thumbnail: "http://placehold.it/400x300",
        cover: "http://placehold.it/1200x600",
        type: "photo",
        description: "Amet enim minus eos ipsa veniam cum perspiciatis accusamus. Ab dicta dolor est. Blanditiis nostrum fugiat iure dolores qui ad. Et sit maiores at dignissimos.",
        items: []
    },
]
});

export default Project;
