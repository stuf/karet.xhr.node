
# karet.xhr.node

Sample case for [`karet.xhr`](https://github.com/calmm-js/karet.xhr) not working in Node.js with a polyfilled environment.

## Getting started

```sh
npm install
npm start
```

```sh
yarn
yarn start
```

## Error

After polyfilling `global.XMLHttpRequest` performing `XHR.getJson` produces the following thrown error:

```
~/C/L/karet.xhr.node ❯❯❯ yarn start
yarn run v1.9.2
$ node start.js
/Users/stefan.rimaila/Code/Lab/karet.xhr.node/node_modules/karet.xhr/dist/karet.xhr.cjs.js:153
      xhr.upload[ADD_EVENT_LISTENER](type, update(UP, type));
                ^

TypeError: Cannot read property 'addEventListener' of undefined
    at /Users/stefan.rimaila/Code/Lab/karet.xhr.node/node_modules/karet.xhr/dist/karet.xhr.cjs.js:153:17
    at Array.forEach (<anonymous>)
    at /Users/stefan.rimaila/Code/Lab/karet.xhr.node/node_modules/karet.xhr/dist/karet.xhr.cjs.js:151:16
    at S$5._onActivation (/Users/stefan.rimaila/Code/Lab/karet.xhr.node/node_modules/kefir/dist/kefir.js:739:23)
    at S$5._setActive (/Users/stefan.rimaila/Code/Lab/karet.xhr.node/node_modules/kefir/dist/kefir.js:270:14)
    at S$5._on (/Users/stefan.rimaila/Code/Lab/karet.xhr.node/node_modules/kefir/dist/kefir.js:313:12)
    at S$5.onAny (/Users/stefan.rimaila/Code/Lab/karet.xhr.node/node_modules/kefir/dist/kefir.js:338:17)
    at AnonymousObservable._onActivation (/Users/stefan.rimaila/Code/Lab/karet.xhr.node/node_modules/kefir/dist/kefir.js:1013:18)
    at AnonymousObservable._setActive (/Users/stefan.rimaila/Code/Lab/karet.xhr.node/node_modules/kefir/dist/kefir.js:270:14)
    at AnonymousObservable._on (/Users/stefan.rimaila/Code/Lab/karet.xhr.node/node_modules/kefir/dist/kefir.js:526:12)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
