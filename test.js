var assert = require('assert')
var concat = require('concat-stream')
var Stream = require('stream')
var through = require('./')

var stream = new Stream.Readable()
stream._read = function () {}

stream
  .pipe(through(
    function (chunk) { return chunk.toString().toUpperCase() },
    function () { return 'last chunk\n' }
  ))
  .pipe(concat(function (output) {
    assert(output.toString() === 'HELLO\nWORLD\nlast chunk\n')
  }))

stream.push('hello\n')
stream.push('world\n')
stream.push(null)
