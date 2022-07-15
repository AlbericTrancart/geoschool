module.exports = {
  projects: [
    "<rootDir>/backend/jest.config.js",
    "<rootDir>/frontend/jest.config.js",
    "<rootDir>/shared/jest.config.js",
  ],
  coverageDirectory: "<rootDir>/coverage",
  coverageThreshold: {
    global: {
      statements: 85,
      branches: 85,
      functions: 85,
      lines: 85,
    },
  },
};
