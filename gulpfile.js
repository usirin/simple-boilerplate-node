const gulp = require('gulp')
const nodemon = require('nodemon')
const path = require('path')

gulp.task('run', () => {
  nodemon({
    execMap: {
      js: 'node'
    },
    script: path.join(__dirname, 'lib'),
    ignore: ['*'],
    watch: ['foo/'],
    ext: 'noop'
  }).on('restart', console.log.bind(console, 'Restarted!'))
})

