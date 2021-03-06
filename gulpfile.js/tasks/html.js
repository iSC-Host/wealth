var config       = require('../config');

var browserSync  = require('browser-sync');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var htmlmin      = require('gulp-htmlmin');
var path         = require('path');
var render       = require('gulp-nunjucks-render');
var fs           = require('fs');

var exclude = path.normalize('!**/{' + config.tasks.html.excludeFolders.join(',') + '}/**');

var paths = {
  src: [path.join(config.root.src, config.tasks.html.src, '/*.html'), exclude],
  dest: path.join(config.root.dest, config.tasks.html.dest)
};

var htmlTask = function() {
  console.log(config.env);
  render.nunjucks.configure([path.join(config.root.src, config.tasks.html.src)], {watch: false });

  return gulp.src(paths.src)
    .on('error', console.log)
    .pipe(render())
    .on('error', console.log)
    .pipe(gulpif(config.env === 'production', htmlmin(config.tasks.html.htmlmin)))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
};

gulp.task('html', htmlTask);
