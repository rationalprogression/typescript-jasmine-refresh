# typescript-reference

Typescript reference application

## Dependencies

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/docs) or [NPM](https://www.npmjs.com/). I'm using Yarn here to test it out.
- [Typescript](https://www.typescriptlang.org/index.html)
    - `yarn global add typescript`
    - `npm install -g typescript`
<!-- - [Jasmine](https://jasmine.github.io/setup/nodejs.html)
    - `yarn global add jasmine`
    - `npm install -g jasmine` -->
- [Gulp](https://gulpjs.com/)
    - `yarn global add gulp-cli`
    - `npm install gulp-cli -g`

## Getting started

- yarn install

### Running tests

- tsc
- gulp test

### Debugging tests

- F5

## Resources

- TSLint [docs](https://palantir.github.io/tslint/) and [repo](https://github.com/palantir/tslint)
- [TypeScript compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [Jasmine code snippets for VS Code](https://marketplace.visualstudio.com/items?itemName=xabikos.JasmineSnippets)
- [Jamine-node](https://github.com/mhevery/jasmine-node)
- [Jasmine-ts](https://github.com/svi3c/jasmine-ts)

## Useful commands

- yarn init --yes
- tsc --init
- tslint --init
- yarn add --dev `packagename`

## Double quotes vs single quotes

- [Double quotes vs single quotes](https://stackoverflow.com/questions/242813/when-to-use-double-or-single-quotes-in-javascript) on SO
- The default for TSLint is double quotes, so use that...

## Modules vs namespaces

Following [this answer](https://stackoverflow.com/questions/30357634/how-do-i-use-namespaces-with-typescript-external-modules) on SO: since we use modules, and modules can be organized using a directory strucuture, namespaces are unnecessary?

So: use modules, organize in directories, until we run into something....

## ECMAScript versions

- [NodeJS support](http://node.green/)
- [Browser support](https://kangax.github.io/compat-table/es6/)
- [Learn ES2015](https://babeljs.io/learn-es2015/)
- [Exploring ES6](http://exploringjs.com/es6/index.html)

## Yarn vs NPM

- Giving [Yarn](https://yarnpkg.com/en/docs) a try
