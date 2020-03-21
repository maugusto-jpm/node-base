const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password_hash: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
    },
    {
      hooks: {
        beforeSave: async user => {
          if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8);
          }
        },
      },
    }
  );

  User.prototype.checkPassword = function(password) {
    return bcrypt.compare(password, this.password_hash);
  };

  User.prototype.generateToken = function() {
    const token = jwt.sign(
      {
        id: this.id,
        ...this.basicInfo(),
      },
      process.env.APP_SECRET
    );

    return `Bearer ${token}`;
  };

  User.prototype.basicInfo = function() {
    return {
      name: this.name,
      email: this.email,
    };
  };

  return User;
};
