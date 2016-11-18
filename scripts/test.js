var CoffeeScript = require('coffee-script')
var babel = require('babel-core')
var path = require('path')

var extend = Object.assign

var coffeeBabel = function (module, filename) {

  var c = CoffeeScript._compileFile(filename, false, true)

  var opts = new babel.OptionManager().init(extend(
    { sourceRoot: path.dirname(filename) },
    { filename: filename, ast: false, sourceMaps: 'both' }
  ));

  var b = babel.transform(c, opts)

  module._compile(b.code, filename)
}

require.extensions['.coffee'] = coffeeBabel
