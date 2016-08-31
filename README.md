# babel-plugin-eslint-test-generator

This is a Babel Plugin which will generate ci tests based on eslint results. Basically developers can't ignore linting when it's in CI

## Usage

[![NPM](https://nodei.co/npm/babel-plugin-eslint-test-generator.png)](https://www.npmjs.com/package/babel-plugin-eslint-test-generator)

## License

MIT, see [LICENSE.md](http://github.com/Shopify/babel-plugin-eslint-test-generator/blob/master/LICENSE.md) for details.

## Example

The following is an example `.babelrc` file:

```javascript
{
  "presets": ["es2015"],
  "plugins": [
    ["eslint-test-generator", {
      "template": "mocha",
      "paths": [
        "src/**/*.js",
        "test/**/*.js",
      ]
    }]
  ]
}
```

### Using with `.eslintrc`
It should be noted when using this module you should use explicit paths to plugins in your `.eslintrc`. For instance:
```
"extends": [
  "./node_modules/coding-standard/eslintDefaults.js",
  "./node_modules/coding-standard/.eslintrc-es6",
  "./node_modules/coding-standard/.eslintrc-jsx"
]
```

More on that here:
http://eslint.org/docs/user-guide/configuring#using-a-configuration-file


## Plugin Options

- `template`- Required String which can be either be a `handlebars` template. Or one of the following if you'd like to use a pre-existing template:
    + `mocha`
    + `qunit`
- `paths` - Required Array or String. Paths can be an Array of glob strings defining which files should be linted. You can also pass in a glob string instead of an Array.
- `file` - A String that is a file that we'd like to append the generated tests into. eg. `'test-lint.js'`
- `optsEslint`- Optional `eslint` options object.
