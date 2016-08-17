/*global define*/

define([
  'underscore',
  'backbone',
  'templates'
], function (_, Backbone, JST) {
  'use strict';

  var <%= className %>Pod = Backbone.View.extend({
    template: JST['<%= jst_path %>'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
	  return this;
    }
  });

  return <%= className %>Pod;
});
