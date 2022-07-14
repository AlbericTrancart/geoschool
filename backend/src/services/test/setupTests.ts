process.env.TYPEORM_ENTITY_PREFIX = process.env.JEST_WORKER_ID;

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
