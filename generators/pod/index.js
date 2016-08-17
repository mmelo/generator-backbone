/*jshint latedef:false */
var path = require('path');
var util = require('util');
var pascalCase = require('pascal-case');
var yeoman = require('yeoman-generator');
var scriptBase = require('../../script-base');

var PodGenerator = scriptBase.extend({
  constructor: function () {
    scriptBase.apply(this, arguments);

    var dirPath = '../templates';
    this.sourceRoot(path.join(__dirname, dirPath));
  },

  writing: {
    createPodFiles: function () {
      var templateFramework = 'handlebars';
      var templateExt = '.hbs';
      this.jst_path = this.env.options.appPath + '/scripts/pods/' + this.name + '/index' + templateExt;

      this.template('view.hbs', this.jst_path);

      this._writeTemplate(
        'pod',
        path.join(this.env.options.appPath + '/scripts/pods', this.name),
        {
          appClassName: pascalCase(this.appname),
          className: pascalCase(this.name),
          'jst_path': this.jst_path
        }
      );

      if (!this.options.requirejs) {
        this._addScriptToIndex('pods/' + this.name + '/index');
      }
    }
  }
});

module.exports = PodGenerator;
