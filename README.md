# js-packaging

Test different JavaScript modules and packaging for node and the browser.

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
module.exports = { a, b };
```

This will work with classes as well.

## Level 1: ES Modules

| Module                | Comment                                  |
| ---                   | ---                                      |
| `simple-as-module`    | Single file, single function, ES module. |
| `es-module-client`    | A "client" using the `simple-as-module`. |

The simplest ES module scenario defines both, the used module and using module with `.mjs` files. The `package.json`
`type` setting is not so much important as often stated on the web. This eventually depends on the `node` platform
version though.

**Please note:** There is no need to repeat the use-cases from level-0 as their transfer to ES modules is
straightforward. Use

```javascript
export default function name() {};
export function noDefault() {};
```

to export a function. The `default` function corresponds to the `simple` module export, the `noDefault` to
`simple-named`.

## Level 2: Single Package, Common-JS &amp; ES Module

_to be written..._
