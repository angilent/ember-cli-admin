var fs = require('fs');
var path = require('path');
var renameFile = require('ember-cli-admin/lib/proccess-text-content').renameFile;

module.exports = {

  afterInstall: function() {
    renameFile.bind(this)('app/styles/app.css', 'app/styles/app.scss');
    this.addPackagesToProject([
        {name: "ember-cli-map", target: "0.2.2"},
        {name: "broccoli-merge-trees", target: "0.1.4"},
        {name: "broccoli-sass", target: "^0.2.2"},
        {name: "broccoli-static-compiler", target: "0.1.4"},
        {name: "ember-cli-coffeescript", target: "^0.1.0"},
        {name: "broccoli-coffee", target: "^0.1.1"}
    ]);
    return this.addBowerPackagesToProject([
      {name: "bootstrap-sass-official", target: "3.2.0"},
      {name: "typeahead.js", target: "twitter/typeahead.js#0.10.5"},
      {name: "jquery-ui-sortable", target: "*"}
    ]);
  }
};
