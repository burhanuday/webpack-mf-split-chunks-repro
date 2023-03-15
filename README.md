# webpack-mf-split-chunks-repro

Reproduction of the issue where webpack build crashes when using `splitChunks` with ModuleFederationPlugin.

To reproduce:
In the root of the repository, run

```shell
yarn
```

Then in two separate terminals, cd into `host` and `remote` folder, run

```shell
yarn start
```

Go to localhost:8080 and you should see the following error in the console:

```shell
Uncaught (in promise) ScriptExternalLoadError: Loading script failed.
(missing: http://localhost:8081/remoteEntry.js)
while loading "./RemoteApp" from webpack/container/reference/remote
    at webpack/container/reference/remote (main.js:29:25)
    at __webpack_require__ (main.js:71:33)
    at initExternal (main.js:336:28)
    at __webpack_require__.I (main.js:349:15)
    at main.js:838:47
    at webpack/sharing/consume/default/react/react (main.js:892:67)
    at main.js:923:56
    at Array.forEach (<anonymous>)
    at __webpack_require__.f.consumes (main.js:906:36)
    at main.js:154:40

```

The issue disappears when `splitChunks` is removed from `webpack.config.js` in `host` and `remote` folder.
