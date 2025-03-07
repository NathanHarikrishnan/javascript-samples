const gulp = require("gulp");
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./../webpack.config.js');
const open = require('open');
const port = 9000;
const runSequence = require('gulp4-run-sequence');
gulp.task('serve', function (done) {
  runSequence('build');
  const server = new WebpackDevServer(webpack(config));
  server.listen(port, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Reports JS sample browser is listening on localhost:', port);
    open('http://localhost:' + port + '/');
  });
  done();
});