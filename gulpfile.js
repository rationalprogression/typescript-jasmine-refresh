const gulp = require('gulp');
const args = require('yargs').argv;
const config = require('./gulp.config')();

const $ = require('gulp-load-plugins')({
    rename: {
        'gulp-typescript': 'ts',
        'gulp-if': 'gulpif'
    },
    lazy: true
});

gulp.task('compile', compile);

gulp.task('lint', ['compile'], lint);

gulp.task('test', ['lint'], test);

gulp.task('default', ['compile', 'lint', 'test']);

gulp.task('watch', function () {
    log("*** START WATCHING ***");
    gulp.watch(config.tsFiles, ['default']);
});

//example watcher with callback
gulp.task('sample-watcher', function () {
    gulp.watch(config.tsFiles, function (event) {
        log('watched event ' + event.type + ' for ' + event.path);
    });
});

var tsProject = $.ts.createProject("tsconfig.json", {
    // noEmitOnError: true
});

function compile(cb) {
    log("*** START COMPILING ***");
    let errorReported = false;
    tsProject.src()
        // .pipe($.plumber()) // no need for plumber here, unless new issues show up....
        // .pipe($.gulpif(args.verbose, $.print()))
        .pipe(tsProject())
        .on('error', function (error) {
            log("*** ERROR COMPILING ***");
            errorReported = true;
            cb(error);
        })
        .js.pipe(gulp.dest("js"))
        .on('end', function () {
            log("*** END COMPILING ***");
            if (!errorReported) {
                cb();
            }
        });
}

function lint(cb) {
    log("*** START LINTING ***");
    gulp.src(config.tsFiles)
        .pipe($.tslint({
            formatter: "prose"
        }))
        .pipe($.tslint.report({
            summarizeFailureOutput: true,
            emitError: false
        }))
        .on('end', function () {
            log("*** END LINTING ***");
            cb();
        });
}

function test(cb) {
    log("*** START TESTING ***");
    gulp.src(config.specFiles)
        // gulp-jasmine works on filepaths so you can't have any plugins before it
        .pipe($.jasmine({
            verbose: args.verbose ? true : false,
            errorOnFail: false,
            // reporter: new reporters.NUnitXmlReporter()
        }))
        .on('error', function (error) {
            // will only be called if above errorOnFail is set to true
            log("*** ERROR TESTING ***");
            cb(error);
        })
        .on('jasmineDone', function () {
            log("*** END TESTING ***");
            cb();
        });
}

function log(msg) {
    if (typeof (msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.yellow(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.yellow(msg));
    }
}

function logError(error) {
    log('*** Start of Error ***');
    log(error);
    log('*** End of Error ***');
}
