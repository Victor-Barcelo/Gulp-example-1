var browserify = require('browserify'),
    gulp = require('gulp'),
    transform = require('vinyl-transform'),
    uglify = require('gulp-uglify');

gulp.task('js', function () {
    var browserified = transform(function (filename) {
        var b = browserify(filename);
        return b.bundle();
    });
    return gulp.src('./src/js/*.js')
        .pipe(browserified)
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));
});