var gulp             = require('gulp');
var pug              = require("gulp-pug2");
var sass             = require('gulp-sass');

// компиляция pug
gulp.task('pug', function() {
  return gulp.src('src/*.pug')
      .pipe(pug({ yourTemplate: 'Locals' }))
      .pipe(gulp.dest('dest'));
});


// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src('src/**.scss')
        .pipe(sass())
        .pipe(gulp.dest('dest/css'));
});

// var pug = require('gulp-pug');

// gulp.task('build', function build() {
//   return gulp.src('views/**.pug')
//     .pipe(pug(options))
//     .pipe(gulp.dest('out'));
// });
