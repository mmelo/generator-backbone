/*jshint latedef:false */
var path = require('path');
var util = require('util');
var pascalCase = require('pascal-case');
var yeoman = require('yeoman-generator');
var scriptBase = require('../../script-base');

var ControllerGenerator = scriptBase.extend({
  constructor: function () {
    scriptBase.apply(this, arguments);
    var dirPath = this.options.coffee ? '../templates/coffeescript/' : '../templates';
    this.sourceRoot(path.join(__dirname, dirPath));
  },

  writing: {
    controllerFiles: function () {
      this._writeTemplate(
        'controller',
        path.join(this.env.options.appPath + '/scripts/controllers', this.name),
        {
          appClassName: pascalCase(this.appname),
          className: pascalCase(this.name)
        }
      );

      if (!this.options.requirejs) {
        this._addScriptToIndex('controllers/' + this.name);
      }
    },

    composeTest: function () {
      this._generateTest('controller');
    }
  }
});

module.exports = ControllerGenerator;
