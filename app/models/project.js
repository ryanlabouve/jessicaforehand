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
        type: "art",
        description: "",
    },
    {
        id: 2,
        name: "Loveworks Leadership Inc.",
        thumbnail: "img/event-loveworks-leadership-inc/loveworks9-thumbnail.jpg",
        cover: "img/event-loveworks-leadership-inc/loveworks9-cover.jpg",
        type: "events",
        description: "",
    },
    {
        id: 3,
        name: "Ballroom",
        thumbnail: "img/event-ballroom/Ballroom1-thumbnail.jpg",
        cover: "img/event-ballroom/Ballroom1-cover.jpg",
        type: "events",
        description: "",
    },
    {
        id: 4,
        name: "Wedding",
        thumbnail: "img/event-wedding/wedding12-thumbnail.jpg",
        cover: "img/event-wedding/wedding12-cover.jpg",
        type: "events",
        description: "",
    },
    {
        id: 5,
        name: "Night Photos",
        thumbnail: "img/art-night-photos/nightphoto2-thumbnail.jpg",
        cover: "img/art-night-photos/nightphoto2-cover.jpg",
        type: "art",
        description: "",
    },
    {
        id: 6,
        name: "Churches",
        thumbnail: "img/art-churches/st-johns-thumbnail.jpg",
        cover: "img/art-churches/st-johns-cover.jpg",
        type: "art",
        description: "",
    },
    {
        id: 7,
        name: "You Can Never Go Home Again",
        thumbnail: "img/art-you-can-never-go-home-again/swing-thumbnail.jpg",
        cover: "img/art-you-can-never-go-home-again/swing-cover.jpg",
        type: "art",
        description: "",
    },
]
});

export default Project;
