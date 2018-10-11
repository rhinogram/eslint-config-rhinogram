module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: "airbnb-base",
  plugins: ["babel"],
  rules: {
    "no-unused-vars": 1,
    "arrow-body-style": 1,
    "arrow-parens": 1,
    "import/prefer-default-export": 0,
    "max-len": [1, { code: 170 }],
    "no-use-before-define": 0,
    "no-param-reassign": 0,
    "import/no-cycle": 0
  }
};
