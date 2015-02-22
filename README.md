# through2-sync [![npm version](http://img.shields.io/npm/v/through2-sync.svg?style=flat-square)](https://www.npmjs.org/package/through2-sync)

> Synchronous [through2] transforms.

[through2]: https://github.com/rvagg/through2

Description
-----------

The API is the same as [through2][] (including the `through.obj`
helper), but the callback function is synchronous.

Example
-------

```js
const Stream = require('stream')
const through = require('through2-sync')

const stream = new Stream.Readable()
stream._read = () => {}

stream
  .pipe(through(
    chunk => chunk.toString().toUpperCase(),
    () => 'last chunk\n'
  ))
  .pipe(process.stdout)

stream.push('hello\n') // HELLO
stream.push('world\n') // WORLD
stream.push(null) // last chunk
```
