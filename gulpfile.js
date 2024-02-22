const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

// Compile Sass & Inject Into Browser
gulp.task('sass', () =>{
  return gulp.src([ 'src/styles.scss'])
    .pipe(sass())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('dist/css')) 
    .pipe(browserSync.stream())
});

// Watch Sass & Serve
gulp.task('serve', gulp.series(['sass'], (done) => {
  browserSync.init({
    server: "./"
  });

  gulp.watch(['src/*.scss'], gulp.series(['sass']));
  gulp.watch("*.html").on('change', browserSync.reload);
  done();
}));
// Default Task
gulp.task('default',gulp.parallel( ['serve']));
