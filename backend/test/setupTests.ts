const warn = console.warn;
global.console.warn = (message) => {
  warn.apply(message); // Keep default behavior
  throw message; // Fail on console.warn
};

const error = console.error;
global.console.error = (message) => {
  error.apply(message);
  throw message;
};
