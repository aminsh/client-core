var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('concat', function () {
    gulp.src('src/*.js')
        .pipe(concat('jshelper.bundle.js'))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('concatAndUglify', function () {
    gulp.src('src/*.js')
        .pipe(concat('jshelper.bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('default', ['concat', 'concatAndUglify']);