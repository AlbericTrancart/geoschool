module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
      },
      plugins: ["prettier", "import"],
      extends: [
        "plugin:import/recommended",
        "plugin:import/typescript",
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      rules: {
        // General
        curly: ["error", "all"],
        eqeqeq: ["error", "smart"],
        complexity: ["error", 8],
        "prefer-const": "error",
        "padding-line-between-statements": [
          "error",
          {
            blankLine: "always",
            prev: "*",
            next: "return",
          },
        ],
        "arrow-body-style": ["error", "as-needed"],
        "no-nested-ternary": "error",
        "no-console": [
          "error",
          {
            allow: ["warn", "error"],
          },
        ],

        // Imports
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: false,
          },
        ],
        "import/order": [
          "error",
          {
            groups: [
              ["external", "builtin"],
              "internal",
              ["parent", "sibling", "index"],
            ],
          },
        ],
        "sort-imports": [
          "error",
          {
            ignoreCase: true,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
          },
        ],
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              {
                group: ["@smallable/help-purchase-shared/*/*"],
                message:
                  "Import of internal modules must be done at the root level.",
              },
            ],
            paths: [
              {
                name: "lodash",
                message: "Please use lodash/{module} import instead",
              },
            ],
          },
        ],

        // @typescript-eslint overrides
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "off",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",

        // Enable more @typescript-eslint rules
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/strict-boolean-expressions": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/ban-types": [
          "error",
          {
            types: {
              "Record<string,string>":
                "Don't use Record indexed by string, use Map instead (https://fnune.com/typescript/2019/01/30/typescript-series-1-record-is-usually-not-the-best-choice/)",
            },
            extendDefaults: true,
          },
        ],
      },
    },
  ],
};
