const swcConfigs = {
  module: {
    type: "commonjs",
  },
};

module.exports = {
  roots: ["<rootDir>"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest", swcConfigs],
  },
  modulePaths: ["."],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "\\.(css|svg)$": "<rootDir>/__mocks__/styleMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/services/test/setupTests.ts"],
};
