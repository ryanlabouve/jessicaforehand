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
        name: "",
        cover: "img/event-loveworks-leadership-inc/Loveworks1-item.jpg",
        description: "",
        project: 2
    },
    {
        id: 3,
        name: "",
        cover: "img/event-loveworks-leadership-inc/loveworks2-item.jpg",
        description: "",
        project: 2
    },
    {
        id: 4,
        name: "",
        cover: "img/event-loveworks-leadership-inc/loveworks3-item.jpg",
        description: "",
        project: 2
    },
    {
        id: 5,
        name: "",
        cover: "img/event-loveworks-leadership-inc/loveworks4-item.jpg",
        description: "",
        project: 2
    },
    {
        id: 6,
        name: "",
        cover: "img/event-loveworks-leadership-inc/loveworks5-item.jpg",
        description: "",
        project: 2
    },
    {
        id: 7,
        name: "",
        cover: "img/event-loveworks-leadership-inc/loveworks6-item.jpg",
        description: "",
        project: 2
    },
    {
        id: 8,
        name: "",
        cover: "img/event-loveworks-leadership-inc/loveworks7-item.jpg",
        description: "",
        project: 2
    },
    {
        id: 9,
        name: "",
        cover: "img/event-loveworks-leadership-inc/loveworks8-item.jpg",
        description: "",
        project: 2
    },
    {
        id: 10,
        name: "",
        cover: "img/event-loveworks-leadership-inc/loveworks9-item.jpg",
        description: "",
        project: 2
    },
    {
        id: 11,
        name: "",
        cover: "img/event-loveworks-leadership-inc/loveworks10-item.jpg",
        description: "",
        project: 2
    },
    {
        id: 12,
        name: "",
        cover: "img/event-loveworks-leadership-inc/loveworks11-item.jpg",
        description: "",
        project: 2
    },
    {
        id: 13,
        name: "",
        cover: "img/event-loveworks-leadership-inc/loveworks12-item.jpg",
        description: "",
        project: 2
    },
    {
        id: 14,
        name: "",
        cover: "img/event-loveworks-leadership-inc/loveworks13-item.jpg",
        description: "",
        project: 2
    },
    {
        id: 15,
        name: "",
        cover: "img/event-ballroom/Ballroom1-item.jpg",
        description: "",
        project: 3
    },
    {
        id: 16,
        name: "",
        cover: "img/event-ballroom/Ballroom2-item.jpg",
        description: "",
        project: 3
    },
    {
        id: 17,
        name: "",
        cover: "img/event-ballroom/Ballroom3-item.jpg",
        description: "",
        project: 3
    },
    {
        id: 18,
        name: "",
        cover: "img/event-ballroom/Ballroom4-item.jpg",
        description: "",
        project: 3
    },
    {
        id: 19,
        name: "",
        cover: "img/event-ballroom/Ballroom5-item.jpg",
        description: "",
        project: 3
    },
    {
        id: 20,
        name: "",
        cover: "img/event-wedding/wedding1-item.jpg",
        description: "",
        project: 4
    },
    {
        id: 21,
        name: "",
        cover: "img/event-wedding/wedding2-item.jpg",
        description: "",
        project: 4
    },
    {
        id: 22,
        name: "",
        cover: "img/event-wedding/wedding3-item.jpg",
        description: "",
        project: 4
    },
    {
        id: 23,
        name: "",
        cover: "img/event-wedding/wedding4-item.jpg",
        description: "",
        project: 4
    },
    {
        id: 24,
        name: "",
        cover: "img/event-wedding/wedding5-item.jpg",
        description: "",
        project: 4
    },
    {
        id: 25,
        name: "",
        cover: "img/event-wedding/wedding6-item.jpg",
        description: "",
        project: 4
    },
    {
        id: 26,
        name: "",
        cover: "img/event-wedding/wedding7-item.jpg",
        description: "",
        project: 4
    },
    {
        id: 27,
        name: "",
        cover: "img/event-wedding/wedding8-item.jpg",
        description: "",
        project: 4
    },
    {
        id: 28,
        name: "",
        cover: "img/event-wedding/wedding9-item.jpg",
        description: "",
        project: 4
    },
    {
        id: 29,
        name: "",
        cover: "img/event-wedding/wedding10-item.jpg",
        description: "",
        project: 4
    },
    {
        id: 30,
        name: "",
        cover: "img/event-wedding/wedding11-item.jpg",
        description: "",
        project: 4
    },
    {
        id: 31,
        name: "",
        cover: "img/event-wedding/wedding12-item.jpg",
        description: "",
        project: 4
    },
    {
        id: 32,
        name: "",
        cover: "img/art-night-photos/nightphoto1-item.jpg",
        description: "",
        project: 5
    },
    {
        id: 33,
        name: "",
        cover: "img/art-night-photos/nightphoto1-item.jpg",
        description: "",
        project: 5
    },
    {
        id: 34,
        name: "",
        cover: "img/art-night-photos/nightphoto2-item.jpg",
        description: "",
        project: 5
    },
    {
        id: 35,
        name: "",
        cover: "img/art-night-photos/nightphoto3-item.jpg",
        description: "",
        project: 5
    },
    {
        id: 36,
        name: "",
        cover: "img/art-night-photos/nightphoto4-item.jpg",
        description: "",
        project: 5
    },
    {
        id: 37,
        name: "",
        cover: "img/art-night-photos/nightphoto5-item.jpg",
        description: "",
        project: 5
    },
    {
        id: 38,
        name: "",
        cover: "img/art-churches/Church-of-christ-item.jpg",
        description: "",
        project: 6
    },
    {
        id: 39,
        name: "",
        cover: "img/art-churches/crosspointe-item.jpg",
        description: "",
        project: 6
    },
    {
        id: 40,
        name: "",
        cover: "img/art-churches/first-baptist-item.jpg",
        description: "",
        project: 6
    },
    {
        id: 41,
        name: "",
        cover: "img/art-churches/methodist-item.jpg",
        description: "",
        project: 6
    },
    {
        id: 42,
        name: "",
        cover: "img/art-churches/st-johns-item.jpg",
        description: "",
        project: 6
    },
    {
        id: 43,
        name: "",
        cover: "img/art-you-can-never-go-home-again/hay-barn.jpg",
        description: "",
        project: 7
    },
    {
        id: 44,
        name: "",
        cover: "img/art-you-can-never-go-home-again/horse.jpg",
        description: "",
        project: 7
    },
    {
        id: 45,
        name: "",
        cover: "img/art-you-can-never-go-home-again/john-deere.jpg",
        description: "",
        project: 7
    },
    {
        id: 46,
        name: "",
        cover: "img/art-you-can-never-go-home-again/porch.jpg",
        description: "",
        project: 7
    },
    {
        id: 47,
        name: "",
        cover: "img/art-you-can-never-go-home-again/swing.jpg",
        description: "",
        project: 7
    },
    {
        id: 48,
        name: "",
        cover: "img/portrait-family/familyphoto1-item.jpg",
        description: "",
        project: 8
    },
    {
        id: 49,
        name: "",
        cover: "img/portrait-family/familyphoto2-item.jpg",
        description: "",
        project: 8
    },

    {
        id: 50,
        name: "",
        cover: "img/portrait-family/familyphoto3-item.jpg",
        description: "",
        project: 8
    },
    {
        id: 51,
        name: "",
        cover: "img/portrait-family/familyphoto4-item.jpg",
        description: "",
        project: 8
    },
    {
        id: 52,
        name: "",
        cover: "img/portrait-family/familyphoto5-item.jpg",
        description: "",
        project: 8
    },
    {
        id: 53,
        name: "",
        cover: "img/portrait-family/familyphoto6-item.jpg",
        description: "",
        project: 8
    },
    {
        id: 54,
        name: "",
        cover: "img/portrait-pets/pet1-item.jpg",
        description: "",
        project: 9
    },
    {
        id: 55,
        name: "",
        cover: "img/portrait-pets/pet2-item.jpg",
        description: "",
        project: 9
    },
    {
        id: 56,
        name: "",
        cover: "img/portrait-pets/pet3-item.jpg",
        description: "",
        project: 9
    },
    {
        id: 57,
        name: "",
        cover: "img/portrait-pets/pet4-item.jpg",
        description: "",
        project: 9
    },
    {
        id: 58,
        name: "",
        cover: "img/portrait-pets/pet5-item.jpg",
        description: "",
        project: 9
    },
    {
        id: 59,
        name: "",
        cover: "img/portrait-pets/pet6-item.jpg",
        description: "",
        project: 9
    },
    {
        id: 60,
        name: "",
        cover: "img/portraits/portrait1-item.jpg",
        description: "",
        project: 10
    },
    {
        id: 61,
        name: "",
        cover: "img/portraits/portrait2-item.jpg",
        description: "",
        project: 10
    },
    {
        id: 62,
        name: "",
        cover: "img/portraits/portrait3-item.jpg",
        description: "",
        project: 10
    },
    {
        id: 63,
        name: "",
        cover: "img/portraits/portrait1-item.jpg",
        description: "",
        project: 10
    },
    {
        id: 64,
        name: "",
        cover: "img/portraits/portrait4-item.jpg",
        description: "",
        project: 10
    },
    {
        id: 65,
        name: "",
        cover: "img/portraits/portrait5-item.jpg",
        description: "",
        project: 10
    },
    {
        id: 66,
        name: "",
        cover: "img/portraits/portrait6-item.jpg",
        description: "",
        project: 10
    },
    {
        id: 67,
        name: "",
        cover: "img/portraits/portrait7-item.jpg",
        description: "",
        project: 10
    },
    {
        id: 68,
        name: "",
        cover: "img/portraits/portrait8-item.jpg",
        description: "",
        project: 10
    },
    {
        id: 69,
        name: "",
        cover: "img/portraits/portrait9-item.jpg",
        description: "",
        project: 10
    },
  ]
});

export default Item;
