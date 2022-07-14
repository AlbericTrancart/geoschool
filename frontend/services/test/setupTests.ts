// used by root jest runner to setup jest-dom for RTL
// see https://stackoverflow.com/a/60351942
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { toHaveNoViolations } from "jest-axe";

// Do not need to import React in test files, specific to @swc
global.React = React;

// Axe config
expect.extend(toHaveNoViolations);

// Flag console.warn and console.error as failed tests
global.console.warn = (message, ...args) => {
  // eslint-disable-next-line
  console.log(message, ...args);

  throw message;
};

global.console.error = (message, ...args) => {
  // eslint-disable-next-line
  console.log(message, ...args);

  throw message;
};
