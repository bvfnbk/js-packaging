# js-packaging

Experiments with JS Packaging for Browser &amp; Node. This document systematically increases the complexity when
packaging JavaScript functions and classes.

## Level 0: Common-JS, No Transpilation

The following modules are the most simple modules there are (at least when working with Node). Each package defines a
module with one or more exported functions. The corresponding "client" packages just include the packages and use the
functions. 

| Module                | Comment                                                     |
| ---                   | ---                                                         |
| `simple`              | Single file, single function, Common-JS.                    |
| `simple-named`        | Single file, single function, no default export, Common-JS. |
| `simple-client`       | A "client" using the `simple` module.                       |
| `simple-named-client` | A "client" using the `simple-named` module.                 |
| `multi-simple`        | Multiple files, multiple functions, Common-JS.              |
| `multi-simple-client` | A "client" using the `multi-simple` module.                 |

Functions may be exported via the module name with

```javascript
function name() { }
module.exports = name;
```

and giving it a name with

```javascript
function name() { }
module.exports = { name };
```

The entry point `index.js`  integrate functions `a` and `b` defined in the files `./a.js` and `./b.js` like

```javascript
const a = require('./a');
const b = require('./b');
module.exports = { first, other };
```

This will work with classes as well.
