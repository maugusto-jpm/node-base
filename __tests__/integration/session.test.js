const request = require('supertest');

const { User } = require('../../src/app/models');

const app = require('../../src/app');
const truncate = require("../utils/truncade");

describe('Autentication', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should autenticate with valid credentials', async () => {
    const user = await User.create({
      name: 'Marcelo',
      email: 'email@provider.com',
      password_hash: '123456'
    });

    const response = await request(app)
      .post('/session/new')
      .send({
        name: 'Marcelo',
        email: 'email@provider.com',
        password: '123456'
      });

    expect(response.status).toBe(200);
  });
});
