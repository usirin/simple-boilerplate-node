const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.join(__dirname, './lib'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']}
    ]
  },
  externals: generateExternals('node_modules'),
  plugins: [
    new webpack.IgnorePlugin(/\.css$/)
  ]
}

function generateExternals(nodeModulesPath) {
  var nodeModules = {}
  fs.readdirSync('node_modules')
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => nodeModules[mod] = `commonjs ${mod}`)

  return nodeModules
}
