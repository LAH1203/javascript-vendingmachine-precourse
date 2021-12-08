module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["tui", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "max-depth": [1, 3],
    "max-lines-per-function": [1, 15],
    "spaced-comment": ["error", "always"],
    "no-new": "off",
    "no-alert": "off",
    "no-console": "off",
    "no-plusplus": "off",
  },
};
