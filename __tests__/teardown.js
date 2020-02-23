const db = require('../src/app/models');

module.exports = async () => {
  db.sequelize.close();
};
