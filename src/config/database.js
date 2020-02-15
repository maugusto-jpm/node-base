if (process.env.NODE_ENV !== "production") {
  const dotenvExpand = require('dotenv-expand');
  const dotenv = require('dotenv').config({ encoding: 'utf8' });

  dotenvExpand(dotenv);
}

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },
};
