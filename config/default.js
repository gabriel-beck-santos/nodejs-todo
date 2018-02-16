const env = process.env.NODE_ENV || 'development';
const tsFormat = () => (new Date()).toLocaleTimeString();
const logDir = '.log';

module.exports = {
  env,
  tsFormat,
  logDir,
};
