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
