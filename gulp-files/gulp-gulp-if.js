var browserify = require('browserify'),
    gulp = require('gulp'),
    transform = require('vinyl-transform'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpif = require('gulp-if'),
    yargs = require('yargs');

var env = yargs.argv.env || 'dev';
console.log('Enviroment: ' + env);

gulp.task('js', function () {
    var browserified = transform(function (filename) {
        var b = browserify(filename);
        return b.bundle();
    });
    return gulp.src('./src/js/*.js')
        .pipe(browserified)
        .pipe(gulpif(env === 'dev', sourcemaps.init({loadMaps: true})))
        .pipe(gulpif(env === 'dev', sourcemaps.write('./')))
        .pipe(gulpif(env === 'prod', uglify()))
        .pipe(gulp.dest('./build/js'));
});