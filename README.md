# gobble-coffee

Compile LiveScript files with gobble. Creates source maps automatically.

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-livescript
```

## Usage

**gobblefile.js**

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'src' ).transform( 'livescript' );
```


## License

MIT. Copyright 2014 Rich Harris
