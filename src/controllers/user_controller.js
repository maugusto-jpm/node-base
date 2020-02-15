const { User } = require('../app/models');

module.exports = {
  async index(_, res) {
    const users = await User.findAll();

    return res.json(users);
  },
};
