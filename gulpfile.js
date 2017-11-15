var gulp = require('gulp')
var shell = require('gulp-shell')
var browserSync = require('browser-sync').create()

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  gulp.watch('prawn/my_pdf.rb', ['render-pdf'])
  gulp.watch('output/my_pdf.pdf').on('change', browserSync.reload)
})

gulp.task('render-pdf', shell.task(['bundle exec ruby render_pdf.rb']))

gulp.task('default', ['serve'])
