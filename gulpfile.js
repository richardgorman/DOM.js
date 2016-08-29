var gulp = require('gulp');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');

gulp.task('minify', function() {
    gulp.src([
            'src/core/DOM.js',
            'src/plugins/DOM.addClass.js',
            'src/plugins/DOM.removeClass.js',
            'src/plugins/DOM.toggleClass.js',
            'src/plugins/DOM.hasClass.js',
            'src/plugins/DOM.addEvent.js',
            'src/plugins/DOM.removeEvent.js',
            'src/plugins/DOM.triggerEvent.js',
            'src/plugins/DOM.find.js',
            'src/plugins/DOM.index.js',
            'src/plugins/DOM.each.js',
            'src/plugins/DOM.inView.js',
            'src/plugins/DOM.insert.js',
        ])
        .pipe(plumber(function(error) {
            gutil.log(error.message);
            this.emit('end');
        }))
        .pipe(concat('DOM.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src'));
});
