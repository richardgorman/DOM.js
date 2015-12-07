var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');

gulp.task('minify', function() {
  gulp.src('src/DOM.js')
    .pipe(uglify(
      'src/DOM.min.js'
     ))
    .pipe(gulp.dest(''))
});