import babelTemplate from 'babel-template';
import generator, {suites} from 'eslint-test-generator';

export default (babel) => {
  const t = babel.types;

  return {
    visitor: {
      Program(path, state) {
        const currentBabelFile = state.file.opts.filename;

        if (!state.opts.file || currentBabelFile.indexOf(state.opts.file) > -1) {
          const opts = Object.assign(
            {
              paths: '**/*.js',
            },
            state.opts
          );

          if (!opts.template) {
            throw new Error(
              'You should pass in `template` to babel-plugin-eslint-test-generator\'s options.\n' +
              'Possible values could be:\n' +
              Object.keys(suites).map((suite) => {
                return `- '${suite}'`;
              }).join('\n') +
              '\nOr `template` could be a handlebars template string.\n\n'
            );
          }

          // get the js source for tests
          const generatedSource = generator({
            template: opts.template,
            paths: opts.paths,
            optsEslint: opts.optsEslint,
          });

          // get ast for tests
          const getAST = babelTemplate(generatedSource);
          const ast = getAST();

          // add in an extra line before tests are dropped in
          path.pushContainer('body', t.noop());

          // dropped in tests
          path.pushContainer('body', ast);
        }
      },
    },
  };
};
