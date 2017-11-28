let gulp = require('gulp')
let cleanCSS = require('gulp-clean-css')
let ghPages = require('gulp-gh-pages')

gulp.task('mini', () => {
  return gulp.src('static/icons/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build'))
})

// Deploy to GitHub
gulp.task('deploy', function () {
  return gulp.src('./dist/**/*')
    .pipe(ghPages())
})
