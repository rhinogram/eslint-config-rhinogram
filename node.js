module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  extends: 'airbnb-base',
  // plugins: ['babel'],
  rules: {
    'no-unused-vars': 1,
    'arrow-body-style': 1,
    'arrow-parens': 1,
    'import/prefer-default-export': 0,
    'max-len': ['error', 170, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'import/no-cycle': 0,
  },
};
