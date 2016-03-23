const gulp = require('gulp')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const nodemon = require('nodemon')
const path = require('path')

function onBuild(done) {
  return (err, stats) => {
    if (err) {
      console.log('Error', err)
    }
    else {
      console.log(stats.toString())
    }

    if (done) {
      done()
    }
  }
}

gulp.task('build', done => {
  webpack(webpackConfig).run(onBuild(done))
})

gulp.task('watch', () => {
  webpack(webpackConfig).watch(100, (err, stats) => {
    onBuild()(err, stats)
    nodemon.restart()
  })
})

gulp.task('run', ['watch'], () => {
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

