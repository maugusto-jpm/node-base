if (process.env.NODE_ENV !== 'production') {
  const dotenvExpand = require('dotenv-expand');
  const dotenv = require('dotenv').config({ encoding: 'utf8' });

  dotenvExpand(dotenv);
}
