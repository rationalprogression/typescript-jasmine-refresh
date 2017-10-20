const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const reporters = require('jasmine-reporters');
const ts = require('gulp-typescript');

// var tsProject = ts.createProject("tsconfig.json", { compileOnSave: true });

// gulp.task('build', () => {
//     build();
// })

gulp.task('test', () => {
    test();
});

gulp.task('watch', () => {
    test();
    watch();
});

function test() {
    gulp.src('js/spec/**/*Spec.js')
    // gulp-jasmine works on filepaths so you can't have any plugins before it
    .pipe(jasmine({
        verbose: true,
        errorOnFail: false,
        // reporter: new reporters.NUnitXmlReporter()
    })
    .on('error', function(err) {
        // catch errors to prevent the watch from stopping
      }));
}

function watch(){
    gulp.watch(['js/src/**/*.js', 'js/spec/**/*Spec.js'], () =>
    gulp.src('js/spec/**/*Spec.js')
    // gulp-jasmine works on filepaths so you can't have any plugins before it
    .pipe(jasmine({
        verbose: true,
        errorOnFail: false
    }))
    .on('error', function(err) {
        // catch errors to prevent the watch from stopping
      }));
}
