const { User } = require('../app/models');

User.create({
  name: 'Marcelo Nascimento',
  email: 'email@provider.com',
  password_hash: 'password-hash'
});



