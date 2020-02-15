const request = require('supertest');

const factory = require('../factories');

const app = require('../../src/app');
const truncate = require('../utils/truncade');

describe('Autentication', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should autenticate with valid credentials', async () => {
    const user = await factory.create('User', {
      email: 'email@provider.com',
      password: '123456'
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

  it('should not autenticate with valid credentials', async () => {
    const user = await factory.create('User', {
      email: 'email@provider.com',
      password: '123456'
    });

    const response = await request(app)
      .post('/session/new')
      .send({
        name: 'Marcelo',
        email: 'email@provider.com',
        password: '123'
      });

    expect(response.status).toBe(401);
  });
});
