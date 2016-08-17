var path = require('path'),
    _ = require('lodash')
fs = require('fs'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    uglifyify = require('uglifyify'),
    exorcist = require('exorcist'),
    distPath = './dist',
    templateCache = require('gulp-angular-templatecache');


var production = (process.env.NODE_ENV === 'production');

gulp.task('build-template', function () {
    return gulp.src('templates/**/*.html')
        .pipe(templateCache(
            {
                module: 'core.module',
                filename: 'core.template.bundle.js'
            }))
        .pipe(gulp.dest(distPath));
});

gulp.task('build-vendor', function () {
    var b = browserify(
        {
            debug: true
        });

    var vendorPathSetting = require('./vendor.path.setting');
    _.keys(vendorPathSetting).forEach(function (key) {
        console.log(key);
        b.require(vendorPathSetting[key], {expose: key});
    });

    return b
        .transform('uglifyify')
        .bundle()
        .pipe(exorcist(path.join(distPath, 'vendor.bundle.js.map')))
        .pipe(fs.createWriteStream(path.join(distPath, 'vendor.bundle.min.js'), 'utf8'));
});

gulp.task('build-core', function () {
    var b = browserify(
        {
            entries: "./src/config.default.js",
            debug: true
        });


    var vendorPathSetting = require('./vendor.path.setting');
    _.keys(vendorPathSetting).forEach(function (key) {
        b.external(key);
    });

    return b
        .transform("babelify", {
            presets: ["es2015", "react"]
        })
        .bundle()
        .pipe(exorcist(path.join(distPath, 'core.bundle.js.map')))
        .pipe(fs.createWriteStream(path.join(distPath, 'core.bundle.js'), 'utf8'));
});

gulp.task('build-acc', function () {
    var b = browserify(
        {
            entries: "./src/config.default.js",
            debug: true
        });

    var vendorPathSetting = require('./vendor.path.setting');
    _.keys(vendorPathSetting).forEach(function (key) {
        b.external(key);
    });

    return b
        .transform("babelify", {
            presets: ["es2015", "react"]
        })
        .bundle()
        .pipe(exorcist(path.join(distPath, 'core.bundle.js.map')))
        .pipe(fs.createWriteStream(path.join(distPath, 'core.bundle.js'), 'utf8'));
});

gulp.task('default', ['build-template', 'build-vendor', 'build-core']);

