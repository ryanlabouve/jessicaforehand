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
  ]
});

export default Item;
