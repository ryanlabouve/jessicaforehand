import DS from 'ember-data';

var Project = DS.Model.extend({
  name: DS.attr('string'),
  thumbnail: DS.attr('string'),
  cover: DS.attr('string'),
  type: DS.attr('string'),
  description: DS.attr('string'),
  items: DS.hasMany('item', {async:true})
});

Project.reopenClass({
  FIXTURES: [
    {
        id: 1,
        name: "Ghosts",
        thumbnail: "img/art-ghost/ghost-thumbnail.jpg",
        cover: "img/art-ghost/ghost-cover.jpg",
        type: "photo",
        description: "",
    },
    {
        id: 2,
        name: "Project 2",
        thumbnail: "http://placehold.it/800x600",
        cover: "http://placehold.it/1200x600",
        type: "photo",
        description: "Amet enim minus eos ipsa veniam cum perspiciatis accusamus. Ab dicta dolor est. Blanditiis nostrum fugiat iure dolores qui ad. Et sit maiores at dignissimos.",
    },
    {
        id: 3,
        name: "Project 3",
        thumbnail: "http://placehold.it/800x600",
        cover: "http://placehold.it/1200x600",
        type: "photo",
        description: "Amet enim minus eos ipsa veniam cum perspiciatis accusamus. Ab dicta dolor est. Blanditiis nostrum fugiat iure dolores qui ad. Et sit maiores at dignissimos.",
    },
    {
        id: 4,
        name: "Project 4",
        thumbnail: "http://placehold.it/800x600",
        cover: "http://placehold.it/1200x600",
        type: "photo",
        description: "Amet enim minus eos ipsa veniam cum perspiciatis accusamus. Ab dicta dolor est. Blanditiis nostrum fugiat iure dolores qui ad. Et sit maiores at dignissimos.",
    },
    {
        id: 5,
        name: "Project 5",
        thumbnail: "http://placehold.it/800x600",
        cover: "http://placehold.it/1200x600",
        type: "photo",
        description: "Amet enim minus eos ipsa veniam cum perspiciatis accusamus. Ab dicta dolor est. Blanditiis nostrum fugiat iure dolores qui ad. Et sit maiores at dignissimos.",
    },
    {
        id: 6,
        name: "Project 6",
        thumbnail: "http://placehold.it/800x600",
        cover: "http://placehold.it/1200x600",
        type: "photo",
        description: "Amet enim minus eos ipsa veniam cum perspiciatis accusamus. Ab dicta dolor est. Blanditiis nostrum fugiat iure dolores qui ad. Et sit maiores at dignissimos.",
    },
]
});

export default Project;