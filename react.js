module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": "airbnb",
  "globals": {
    "$": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "arrowFunctions": true,
      "binaryLiterals": true,
      "blockBindings": true,
      "classes": true,
      "defaultParams": true,
      "destructuring": true,
      "forOf": true,
      "generators": true,
      "modules": true,
      "objectLiteralComputedProperties": true,
      "objectLiteralDuplicateProperties": true,
      "objectLiteralShorthandMethods": true,
      "objectLiteralShorthandProperties": true,
      "octalLiterals": true,
      "regexUFlag": true,
      "regexYFlag": true,
      "spread": true,
      "superInFunctions": true,
      "templateStrings": true,
      "unicodeCodePointEscapes": true,
      "globalReturn": true,
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": [
    "react",
    "babel",
    "jsx-a11y"
  ],
  "rules": {
    "no-trailing-spaces": 1,
    "no-unused-vars": 1,
    "arrow-body-style": 1,
    "import/prefer-default-export": 1,
    "import/extensions": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "arrow-parens": 1,
    "class-methods-use-this": 0,
    "react/jsx-indent": 1,
    "react/no-unused-prop-types": 1,
    "react/forbid-prop-types": 0,
    "react/prefer-stateless-function": 1,
    "spaced-comment": 0,
    "key-spacing": [2, { "mode": "minimum" }],
    "no-multi-spaces": [2, { "exceptions": { "ImportDeclaration": true, "VariableDeclarator": true } }],
    "max-len": [0],
    "no-return-assign": ["error", "except-parens"],
    "no-script-url": 0,
    "no-underscore-dangle": 0,
    "space-before-function-paren": ["error", "never"],
    "no-use-before-define": ["error", { "functions": false }],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "no-confusing-arrow": ["error", {"allowParens": true}],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-multi-assign" : 0,
    "react/require-default-props": 0,
    "react/no-find-dom-node": 0
  }
};