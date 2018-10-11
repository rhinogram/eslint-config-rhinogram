module.exports = {
  "env": {
    "node": true,
    "es6": true
  },
  "extends": "airbnb-base",
  "plugins": [
    "babel"
  ],
  "rules": {
    // Blake's old rules for reference
    // "space-before-function-paren": ["error", "never"],
    // "no-use-before-define": ["error", { "functions": false }],
    // "array-callback-return": 0,
    // "prefer-rest-params": 0,
    // "no-restricted-syntax": 0,
    // "arrow-body-style": ["error", "always"],
    // "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    // "spaced-comment": 0,
    // "no-await-in-loop": 0,
    // "no-multi-assign": 0,
    // "no-return-await": 2,

    // Rhinoapi's current rules
    // "generator-star-spacing": 0,
    // "key-spacing": [2, { "mode": "minimum" }],
    // "no-multi-spaces": [2, { "exceptions": { "ImportDeclaration": true, "VariableDeclarator": true } }],
    // "max-len": [0],
    // "no-script-url": 0,
    // "no-underscore-dangle": 0,
    // "space-before-function-paren": ["error", "never"],
    // "no-use-before-define": ["error", { "functions": false }],
    // "array-callback-return": 0,
    // "prefer-rest-params": 0,
    // "no-restricted-syntax": 0,
    // "arrow-body-style": ["error", "always"],
    // "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    // "spaced-comment": 0,
    // "no-await-in-loop": 0,
    // "no-multi-assign": 0,
    // "no-return-await": 2,
    // "no-unused-vars": 1

    // Permanent rules to keep
    "prefer-destructuring": 0,
    "no-underscore-dangle": 0,
    "no-unused-vars": 1,
    "arrow-body-style": 1,
    "arrow-parens": 1,
    "import/prefer-default-export": 1,
    "max-len": [1, { "code": 170 }],
  }
};
