/* jshint esversion: 6 */
/* jshint node: true */
/* jshint strict: false */

const gulp = require('gulp');

const http = require('http');
const connect = require('connect');
const serveStatic = require('serve-static');

gulp.task('http', (done) => {
  const app = connect().use(serveStatic('www'));
  http.createServer(app).listen(9000, done);
});

gulp.task('default', ['http']);
