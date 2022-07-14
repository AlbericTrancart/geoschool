module.exports = {
    ignorePatterns: ["dist", "node_modules"],
    overrides: [
      {
        files: ["**/*.ts?(x)"],
        parser: "@typescript-eslint/parser",
        parserOptions: {
          project: ["./tsconfig.json"],
          tsconfigRootDir: __dirname,
        },
      },
    ],
  };
  