const swcConfigs = {
  module: {
    type: "commonjs",
  },
};

module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest", swcConfigs],
  },
  testMatch: ["**/*.test.ts"],
  // Ignore compiled source from coverage
  coveragePathIgnorePatterns: ["node_modules", "dist"],
  setupFilesAfterEnv: ["<rootDir>/services/test/setupTests.ts"],
};
