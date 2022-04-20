module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "project": [
      "tsconfig.json"
    ]
  },
  plugins: [
    "@typescript-eslint",
    "import"
  ],
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript"
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts",
        ".tsx"
      ]
    },
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  rules: {
    "no-unused-vars": 1,
    "arrow-body-style": 1,
    "arrow-parens": 1,
    "import/prefer-default-export": 0,
    "max-len": [
      "error",
      170,
      2,
      {
        "ignoreUrls": true,
        "ignoreComments": false,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "no-use-before-define": 0,
    "no-param-reassign": 0,
    "import/no-cycle": 0,
    "import/no-extraneous-dependencies": [
      0,
      {
        "devDependencies": true
      }
    ],
    "import/extensions": [
      0, // unable to get passed "file extension missing" errors without downgrading this to none
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "typedef": [
      0,
      "variable-declaration"
    ],
    "@typescript-eslint/lines-between-class-members": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/no-explicit-any": 0
  }
};
