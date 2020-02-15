const { User } = require('../app/models');

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user || !(await user.checkPassword(password))) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    return res.json({
      user: user.basicInfo(),
      token: user.generateToken()
    });
  }
};
