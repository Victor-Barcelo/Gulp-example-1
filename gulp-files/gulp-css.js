'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    changed = require('gulp-changed'),
    minifyCSS = require('gulp-minify-css');

gulp.task('sass', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(changed('./build/css'))
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('default', ['sass']);