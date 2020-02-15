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
      .post('/session')
      .send({
        name: 'User Name',
        email: 'email@provider.com',
        password: '123456'
      });

      
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should not autenticate with valid credentials', async () => {
    const user = await factory.create('User', {
      email: 'email@provider.com',
      password: '123456'
    });

    const response = await request(app)
      .post('/session')
      .send({
        name: 'User Name',
        email: 'email@provider.com',
        password: '123'
      });

    expect(response.status).toBe(401);
  });

  it('should be able to access private routes when authenticated', async () => {
    const user = await factory.create('User', {
      email: 'email@provider.com',
      password: '123456'
    });

    const response = await request(app)
      .get('/dashboard')
      .set('Authorization', `Bearer ${user.generateToken()}`);

    expect(response.status).toBe(200);
  });

  it('should not be able to access private routes without jwt token', async () => {
    const response = await request(app).get('/dashboard');

    expect(response.status).toBe(401);
  });

  it('should not be able to access private routes with invalid jwt token', async () => {
    const response = await request(app)
      .get('/dashboard')
      .set('Authorization', 'Bearer 1234567890');

    expect(response.status).toBe(401);
  });
});
