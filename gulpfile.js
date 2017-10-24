const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const reporters = require('jasmine-reporters');

gulp.task('test', () => {
    test(true);
});

gulp.task('watch', () => {
    test(true);
    watch();
});

function test(verbose) {
    gulp.src('js/spec/**/*Spec.js')
    // gulp-jasmine works on filepaths so you can't have any plugins before it
    .pipe(jasmine({
        verbose: verbose,
        errorOnFail: false,
        // reporter: new reporters.NUnitXmlReporter()
    })
    .on('error', function(err) {
         // catch errors to prevent the watch from stopping
         console.log(err);
         // Fix for (node:61000) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 uncaughtException listeners added. Use emitter.setMaxListeners() to increase limit
         process.exit(1);
      }));
}

function watch(){
    gulp.watch(['js/src/**/*.js', 'js/spec/**/*Spec.js'], () => test(false));
}
