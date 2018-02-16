const i18n = require('i18n');

i18n.configure({
  locales: ['en', 'pt-BR'],
  directory: './locales',
  register: global,
});

module.exports = i18n;
