# TypeScript-Jasmine-Refresh

Exploring [TypeScript](https://www.typescriptlang.org/index.html) with [Jasmine](https://jasmine.github.io) for future reference. Code and tests.

## Global dependencies

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [Typescript](https://www.typescriptlang.org/index.html): `yarn global add typescript`
- [TSLint](https://palantir.github.io/tslint/) `yarn global add tslint`
- [Gulp](https://gulpjs.com/): `yarn global add gulp-cli`

## Getting started

- `yarn` or `yarn install` to install local dependencies

## Up & running

### Command line

- `gulp`: compile, lint and test
- `gulp watch`: compile, lint and test on change
- adding the `--verbose` argument will provide detailed test output

### Visual Studio Code

- `Tasks: Run Test Task` runs the `gulp watch` task, no need to  run a separate build task.
- `Tasks: Run Build Task` will compile the typescript and watch for changes
- `F5` or `Debug: Start Debugging` will run the tests in debug mode

## Resources

### TypeScript

- [TypeScript docs](https://www.typescriptlang.org/docs)
- [Typescript Deep Dive free ebook](https://www.gitbook.com/book/basarat/typescript)
- [TypeScript compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [Microsoft starter template for TypeScript and Node](https://github.com/Microsoft/TypeScript-Node-Starter)
- [Gulp-TypeScript](https://github.com/ivogabe/gulp-typescript)

### TypeScript style guides

- [TypeScript style guide and coding conventions](https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md)
- [TypeScript style guide](https://github.com/excelmicro/typescript) based on the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript)
- [Microsoft's TypeScript coding guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines)

### TypeScript code analysis

- [TSLint](https://palantir.github.io/tslint/)
- [TSLint for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
- [TSLint ESLint rules](https://github.com/buzinas/tslint-eslint-rules)
- [Visual Studio TypeScript Analyzer](https://marketplace.visualstudio.com/items?itemName=RichNewman.TypeScriptAnalyzer)
- [SonarTS](https://github.com/SonarSource/SonarTS)
- [Typescript-Formatter](https://www.npmjs.com/package/typescript-formatter)

### Jasmine

- [Jasmine code snippets for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=xabikos.JasmineSnippets)
- [Jamine-Node](https://github.com/mhevery/jasmine-node)
- [Jasmine-TS](https://github.com/svi3c/jasmine-ts)
- [Gulp-Jasmine](https://github.com/sindresorhus/gulp-jasmine)

## Useful commands

- yarn init --yes
- tsc --init
- tslint --init

## Double quotes or single quotes?

- [Double quotes vs single quotes](https://stackoverflow.com/questions/242813/when-to-use-double-or-single-quotes-in-javascript) on SO
- The default for TSLint is double quotes, so use that for now.

## Modules or Namespaces?

Following [this answer](https://stackoverflow.com/questions/30357634/how-do-i-use-namespaces-with-typescript-external-modules) on SO: since we use modules, and modules can be organized using a directory strucuture, namespaces are unnecessary?

So: use modules, organize in directories, until we run into something....

## ECMAScript versions

- [NodeJS Support](http://node.green/)
- [Browser Support](https://kangax.github.io/compat-table/es6/)
- [Learn ES2015](https://babeljs.io/learn-es2015/)
- [Exploring ES6](http://exploringjs.com/es6/index.html)

## Yarn or NPM?

- Giving [Yarn](https://yarnpkg.com/en/docs) a try
