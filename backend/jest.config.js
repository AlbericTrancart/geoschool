module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  modulePaths: ["./src"],
  moduleDirectories: ["node_modules"],
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.ts"],
};
