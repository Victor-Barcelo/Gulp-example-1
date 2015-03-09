var gulp = require('gulp'),
    sass = require('gulp-sass'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin'),
    size = require('gulp-size');

gulp.task('images:optimize', function () {
    return gulp.src('./src/images/**/*.{jpg,jpeg,png,gif}')
        //.pipe(changed('./build/images'))
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
        .pipe(size());
});

gulp.task('default', ['images:optimize']);