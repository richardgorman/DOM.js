var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');

gulp.task('minify', function() {
  gulp.src('DOM.js')
    .pipe(uglify(
      'DOM.min.js'
     ))
    .pipe(gulp.dest(''))
});