const { sequelize } = require('../src/app/models');

module.exports = async () => {
  sequelize.close();
};
