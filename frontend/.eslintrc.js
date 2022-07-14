module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
      },
      plugins: ["prettier", "risxss", "import", "jsx-a11y"],
      extends: [
        "plugin:import/recommended",
        "plugin:import/typescript",
        "eslint:recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
      ],
      rules: {
        "react/no-array-index-key": "error",
        "react/no-string-refs": "warn",
        "react/jsx-boolean-value": ["error", "never"],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "risxss/catch-potential-xss-react": "error",
        // TODO debt re-enable these rules
        // "import/no-unresolved": "off",
      },
    },
  ],
};
