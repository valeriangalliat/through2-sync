var through = require('through2')

function mkSync (f) {
  return function () {
    var cb = arguments[arguments.length - 1]

    try {
      this.push(f.apply(this, arguments))
      cb()
    } catch (e) {
      cb(e)
    }
  }
}

module.exports = function throughSync (options, transform, flush) {
  if (typeof options === 'function') {
    flush = transform
    transform = options
    options = {}
  }

  return through(
    options,
    transform && mkSync(transform),
    flush && mkSync(flush)
  )
}
