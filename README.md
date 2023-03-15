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

The issue disappears when `splitChunks` is removed from `webpack.config.js` in `host` and `remote` folder.
