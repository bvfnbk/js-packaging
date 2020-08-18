# js-packaging

Test different JavaScript modules and packaging for node and the browser.

## Level 0: Common-JS, No Transpilation

This is the most straight-forward scenario: no transpilation needed, everything basically self-contained. Functions (or
classes) are exported via `module.exports`.

Using the package is possible from ES style modules (i.e. `type` set to `module` using `import`) when importing the
default export and destructuring afterwards to a `const`.

## Level 1: ES Modules

This use-case simply transfers the _level 0_ use-case over to use ES modules. The most significant changes are that
the JavaScript files now end with `.mjs` and the `package.json` configures `type` to be `module`. Functions (or classes)
are exported via `export`/`export default` (examples are omitted here).

## Level 2: Single Package, Common-JS &amp; ES Module

_to be written..._

## Resources

* https://nodejs.org/api/esm.html#esm_package_json_type_field
