const winston = require('winston');
const config = require('config');
const DailyRotateFile = require('winston-daily-rotate-file');
const fs = require('fs');

const env = config.get('env');
const tsFormat = config.get('tsFormat');
const logDir = config.get('logDir');

/**
 * Create the log directory if it does not exist.
 */
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const getFileName = callingModule => callingModule.filename.split('nodejs-todo-terminal/')[1];

const logger = callingModule =>
  new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({
        timestamp: tsFormat,
        colorize: true,
        level: 'info',
        label: getFileName(callingModule),
      }),
      new (DailyRotateFile)({
        filename: `${logDir}/-daily.log`,
        timestamp: tsFormat,
        datePattern: 'yyyy-MM-dd',
        prepend: true,
        label: getFileName(callingModule),
        level: env === 'development' ? 'debug' : 'info',
      }),
    ],
  });

module.exports = logger;
