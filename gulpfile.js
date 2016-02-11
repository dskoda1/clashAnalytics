/**
 * Gulpfile to watch and compile 
 * 
 **/
var gulp = require('gulp');
var concat = require('gulp-concat');
const babel = require('gulp-babel');

gulp.task('compileClient', () => {
    return gulp.src([
            './client/js/setup.js',
            './client/js/models/*',
            './client/js/collections/*',
            './client/js/views/*',
            './client/js/base.js',
        ])
        .pipe(babel())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./public'));
})

gulp.task('watch', () => {
     gulp.watch([
         './client/js/*',
        './client/**/*']
     , ['compileClient']);
    
    
})