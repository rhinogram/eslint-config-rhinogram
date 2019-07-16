### eslint-config-rhinogram

A collection of eslint configurations we use at Rhinogram.

#### Usage
```
$ yarn add eslint-config-rhinogram -D
```

The index file references our React config
```javascript
// .eslintrc

{
  "extends": "rhinogram"
}
```

Alternatives:
```javascript
// .eslintrc

{
  "extends": "rhinogram/react"
}

{
  "extends": "rhinogram/node"
}
```

#### Updating this package
When upgrading this eslint config, check the following:
* Run `yarn audit` to ensure there are no security vulnerabilities.
* Change the `package.json` version appropriately.
