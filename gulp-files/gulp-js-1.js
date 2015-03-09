var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('js:minify:concat', function () {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./build/js'));
});
