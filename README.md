[![Travis](https://travis-ci.com/Shopify/babel-plugin-eslint-test-generator.svg?branch=master)](https://travis-ci.com/Shopify/babel-plugin-eslint-test-generator)
# babel-plugin-eslint-test-generator

This is a Babel Plugin which will generate ci tests based on eslint results. Basically developers can't ignore linting when it's in CI

## Installation
```bash
$ npm install babel-plugin-eslint-test-generator
```

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
- `optsEslint` - Optional `eslint` options object.
- `maxWarnings` - Optional (default: -1), equivalent to `--max-warnings` on
  eslint's CLI. `-1` means there is no maximum.

## License

MIT, see [LICENSE.md](http://github.com/Shopify/babel-plugin-eslint-test-generator/blob/master/LICENSE.md) for details.

<img src="https://cdn.shopify.com/shopify-marketing_assets/builds/19.0.0/shopify-full-color-black.svg" width="200" />
