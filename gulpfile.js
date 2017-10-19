var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('test', () =>
    gulp.watch(['js/src/**/*.js', 'js/spec/**/*Spec.js'], () =>
    gulp.src('js/spec/**/*Spec.js')
        // gulp-jasmine works on filepaths so you can't have any plugins before it
        .pipe(jasmine())
        .on('error', function(err) {
            // catch errors to prevent the watch from stopping
          })
));
