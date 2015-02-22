through2-sync
=============

> Synchronous through2 transforms.

Example
-------

```js
const Stream = require('stream')
const through = require('through2-sync')

const stream = new Stream.Readable()
stream._read = () => {}

stream
  .pipe(through(
    chunk => chunk.toUpperCase(),
    () => 'last chunk\n'
  ))
  .pipe(process.stdout)

stream.push('hello\n') // HELLO
stream.push('world\n') // WORLD
stream.push(null) // last chunk
```
