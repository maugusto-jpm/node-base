const { User } = require('../app/models');

module.exports = {
  async index(req, res) {
    const user = await User.findByPk(req.userId);

    return res.json({ user: user.basicInfo() });
  }
};
