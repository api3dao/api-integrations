const error = (message) => {
  console.log('[ERROR]', message);
};

const info = (message) => {
  console.log('[INFO]', message);
};

const debug = (message) => {
  console.log('[DEBUG]', message);
};

const warn = (message) => {
  console.log('[WARN]', message);
};

export const log = (mode, message, active = true) => {
  if (!active) return;
  console.log(new Error().stack.split('\n')[1].trim().split(' ')[1]);
  switch (mode) {
    case 'error':
      error(message);
      break;
    case 'info':
      info(message);
      break;
    case 'debug':
      debug(message);
      break;
    case 'warn':
      warn(message);
      break;
    default:
      break;
  }
};
