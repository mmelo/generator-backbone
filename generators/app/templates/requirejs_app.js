/*global require*/
'use strict';

require.config({
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
      handlebars: {
      exports: 'Handlebars'
    }
  },
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/lodash/dist/lodash',
    handlebars: '../bower_components/handlebars/handlebars'
  }
});

require([
	'backbone',
	'routes/router'
], function (Backbone, Router) {
	// App Namespacing
	window.App = {
		apiUrl: '',
		Vent: _.extend({}, Backbone.Events),
		Views: {},
		Collections: {},
		Controllers: {},
		Models: {}
	};

	App.Router = new Router;
	Backbone.history.start();
});
