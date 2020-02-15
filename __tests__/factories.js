const { factory } = require('factory-girl');
const { User } = require('../src/app/models');

factory.define('User', User, {
  name: 'Marcelo',
  email: 'Nascimento',
  password: '12345'
});

module.exports = factory;
