// Generated by CoffeeScript 1.6.2
(function() {
  var livereload;

  livereload = require('livereload');

  module.exports = function(app, config) {
    var server, _ref;

    if (config == null) {
      config = {};
    }
    if (app.settings.env === 'production') {
      return app.locals.LRScript = "";
    } else {
      app.locals.LRScript = "<script>document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] + ':" + (config.port || 35729) + "/livereload.js?snipver=1\"></' + 'script>')</script>";
      if ((_ref = config.exts) == null) {
        config.exts = ['styl', 'pug', 'jade'];
      }
      server = livereload.createServer(config);
      return server.watch(config.watchDir || process.cwd() + "/public");
    }
  };

}).call(this);
