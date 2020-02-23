const faker = require('faker');

const { User } = require('../../src/app/models');

module.exports = (factory) => {
  factory.define('User', User, {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  });
};
