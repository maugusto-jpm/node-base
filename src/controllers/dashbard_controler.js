const { User } = require('../app/models');

module.exports = {
  async index(req, res) {
    return res.status(200).send();
  }
};
