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
    "jsx-a11y",
    "react-hooks"
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
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
    "react/prefer-stateless-function": 1,
    "react/jsx-indent": 1,
    "max-len": ['error', 170, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    /////////

    // Old rules to investigate removing
    "class-methods-use-this": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-underscore-dangle": 0,
    "import/extensions": 0,
    "no-script-url": 0,
    "react/no-find-dom-node": 0,
    "no-use-before-define": ["error", { "functions": false }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-return-assign": ["error", "except-parens"], // I think we want to keep
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    //////////

    // TODO: Over time try to remove these - Airbnb suggestions
    "implicit-arrow-linebreak": 0,
    "lines-between-class-members": 0,
    "react/no-access-state-in-setstate": 0, // 76 of these, but we should do this -- https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    "operator-linebreak": 0,
    "object-curly-newline": 0,
    "no-else-return": 0,
    "react/sort-comp": 0,
    "react/require-default-props": 0,
    "react/forbid-prop-types": 0,
    "jsx-a11y/label-has-associated-control": 0
    /////////
  }
};
