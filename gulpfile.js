var gulp = require('gulp');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');

gulp.task('minify', function() {
    gulp.src([
            'src/core/DOM.js',
            // 'src/plugins/DOM.class.js',
            // 'src/plugins/DOM.event.js',
            // 'src/plugins/DOM.index.js',
            // 'src/plugins/DOM.ready.js',
        ])
        .pipe(plumber(function(error) {
            gutil.log(error.message);
            this.emit('end');
        }))
        .pipe(concat('DOM.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src'));
});
