var gulp = require('gulp');
var del = require('del');
var plugins = require('gulp-load-plugins')({lazy: true});

var allJsFilesMainPage = ['*.js', 'js/*.js'];
var allJsFilesViews = ['views/js/*.js'];

var allCssFilesMainPage = ['css/*.css'];
var allCssFilesViews = ['views/css/*.css'];

var allImagesMainPage = ['img/*.*'];
var allImagesViews = ['views/images/*.*'];

var allJsFiles = allJsFilesMainPage.concat(allJsFilesViews);
var allCssFiles = allCssFilesMainPage.concat(allCssFilesMainPage);

// gulp.task('jshint', function() {
//     log('Analyzing with JSHint and JSCS...');

//     return gulp.src(allJsFiles)
//         .pipe(plugins.print())
//         .pipe(plugins.jscs())
//         .pipe(plugins.jshint())
//         .pipe(plugins.jshint.reporter('jshint-stylish', {verbose: true}))
//         .pipe(plugins.jshint.reporter('fail'));
// });

gulp.task('js-main', function() {
    log('Uglifying JS files in main folder...');

    return gulp.src(allJsFilesMainPage)
        .pipe(plugins.uglify())
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(gulp.dest('js/dist'))
});

gulp.task('js-views', function() {
    log('Uglifying and concatenating JS files in views folder...');

    return gulp.src(allJsFilesViews)
        .pipe(plugins.uglify())
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(gulp.dest('views/js/dist'))
});

gulp.task('styles-main', function() {
    log('Minifying CSS in main folder...');

    return gulp.src(allCssFilesMainPage)
        .pipe(plugins.autoprefixer({browsers: ['last 2 version', '> 5%']}))
        .pipe(plugins.csso())
        .pipe(plugins.rename({ suffix: '.min' }))
        //.pipe(plugins.concat('styles.min.css'))
        .pipe(gulp.dest('css/dist'));
});

gulp.task('styles-views', function() {
    log('Minifying CSS in views folder...');

    return gulp.src(allCssFilesViews)
        .pipe(plugins.autoprefixer({browsers: ['last 2 version', '> 5%']}))
        .pipe(plugins.csso())
        .pipe(plugins.rename({ suffix: '.min' }))
        //.pipe(plugins.concat('styles.min.css'))
        .pipe(gulp.dest('views/css/dist'));
});

gulp.task('images-main', function() {
    log('Compressing images in main folder...');

    return gulp.src(allImagesMainPage)
        .pipe(plugins.imagemin({optimizationLevel: 4, verbose: true}))
        .pipe(gulp.dest('img/dist'));
});

gulp.task('images-views', function() {
    log('Compressing images in views folder...');

    return gulp.src(allImagesViews)
        .pipe(plugins.imagemin([
                        plugins.imagemin.jpegtran({progressive:true})],
                        {verbose: true},
                        {optimizationLevel: true}))
        .pipe(gulp.dest('views/images/dist'));
});

gulp.task('serve', ['js-main', 'js-views', 'styles-main', 'styles-views', 'images-main', 'images-views'], function() {
    var options = {
        script: 'server.js',
        delayTime: 1,
        env: {
            'PORT': 3000
        },
        watch: allJsFiles
    };

    return plugins.nodemon(options)
        .on('restart', function(en) {
            log('Restarting...');
        });
});

gulp.task('default', ['serve']);


// Helper functions
function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                plugins.util.log(plugins.util.colors.blue(msg[item]));
            }
        }
    } else {
        plugins.util.log(plugins.util.colors.blue(msg));
    }
}




