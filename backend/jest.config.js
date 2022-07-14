module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  modulePaths: ["./src"],
  modulePathIgnorePatterns: ["./dist"],
  moduleDirectories: ["node_modules"],
  setupFilesAfterEnv: ["<rootDir>/src/services/test/setupTests.ts"],
};
