module.exports = {
  projects: [
    "<rootDir>/backend/jest.config.js",
    "<rootDir>/frontend/jest.config.js",
    "<rootDir>/shared/jest.config.js",
  ],
  coverageDirectory: "<rootDir>/coverage",
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 70,
      lines: 85,
    },
  },
};
