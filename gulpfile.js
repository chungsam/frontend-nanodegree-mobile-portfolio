var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');

var allJsFiles = ['*.js', 'js/*.js'];

gulp.task('js', function() {
    return gulp.src('js/*/js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs())
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist'));
});


gulp.task('serve', ['style'], function() {
    var options = {
        script: 'server.js',
        delayTime: 1,
        env: {
            'PORT': 3000
        },
        watch: allJsFiles
    };

    return nodemon(options)
        .on('restart', function(en) {
            console.log('Restarting...');
        });
});




