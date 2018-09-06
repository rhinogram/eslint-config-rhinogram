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
    "ecmaVersion": 9,
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
    }
  },
  "plugins": [
    "react",
    "babel",
    "jsx-a11y"
  ],
  "rules": {
    // Permanent rules to keep
    "react/destructuring-assignment": 0,
    "react/jsx-one-expression-per-line": 0,
    "no-unused-vars": 1,
    "react/no-unused-prop-types": 1,
    "arrow-body-style": 1,
    "arrow-parens": 1,
    "import/prefer-default-export": 1,
    "react/prefer-stateless-function": 1,
    "react/jsx-indent": 1,
    /////////

    // Old rules to investigate removing
    "class-methods-use-this": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-multi-assign" : 0,
    //"no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-return-assign": ["error", "except-parens"],
    "no-script-url": 0,
    "no-use-before-define": ["error", { "functions": false }],
    "react/no-find-dom-node": 0,
    "react/require-default-props": 0,
    "space-before-function-paren": ["error", "never"],
    //////////

    // TODO: Over time try to remove these - Airbnb suggestions
    "operator-linebreak": 0,
    "no-else-return": 0,
    "lines-between-class-members": 0,
    "implicit-arrow-linebreak": 0,
    "object-curly-newline": 0,
    "react/no-access-state-in-setstate": 0,
    "react/sort-comp": 0,
    "react/require-default-props": 0,
    "max-len": [0, { "code": 400 }], // try to bring this down to at least 120 over time
    "react/forbid-prop-types": 0,
    "jsx-a11y/label-has-associated-control": 0
    /////////
  }
};
