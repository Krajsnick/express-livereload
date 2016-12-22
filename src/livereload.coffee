livereload = require('livereload')

module.exports = (app, config = {})->
  if app.settings.env is 'production'
    app.locals.LRScript = ""
  else
    app.locals.LRScript = "<script>document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] + ':#{config.port or 35729}/livereload.js?snipver=1\"></' + 'script>')</script>"
    config.exts ?= ['styl', 'pug', 'jade']
    server = livereload.createServer(config)
    server.watch(config.watchDir or process.cwd() + "/public")
