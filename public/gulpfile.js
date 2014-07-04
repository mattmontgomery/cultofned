var gulp = require('gulp'),
    bower = require('gulp-bower'),
    sass = require('gulp-sass'),
    shell = require('gulp-shell');

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest('web/vendor/'))
});

gulp.task('sass', function () {
    gulp.src('./web/scss/app.scss')
        .pipe(sass({
            includePaths: ['web/scss','public/vendor/foundation/scss'],
            errLogToConsole: true
        }))
        .pipe(gulp.dest('./public/stylesheets'));
});


gulp.task('server', shell.task([
        'php -S localhost:8020'
    ],{
        cwd: './public'
    }
));

gulp.task('build', ['bower', 'sass']);

gulp.task('default', ['watch', 'server']);
