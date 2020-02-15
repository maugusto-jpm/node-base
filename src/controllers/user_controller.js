const { User } = require('../app/models');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async store(req, res) {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password_hash: password });

    return res.json(user);
  }
};
