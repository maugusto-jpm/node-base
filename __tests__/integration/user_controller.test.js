const request = require('supertest');

const factory = require('../factories');
const app = require('../../src/app');
const truncate = require('../utils/truncade');
const { User } = require('../../src/app/models');

describe('GET #index', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should return all users', async () => {
    await factory.create('User', {
      name: 'User Number One',
      email: 'user-namer-one@email.com',
    });

    await factory.create('User', {
      name: 'User Number Two',
      email: 'user-namer-two@email.com',
    });

    const response = await request(app).get('/user');

    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        name: 'User Number One',
        email: 'user-namer-one@email.com',
      },
      {
        name: 'User Number Two',
        email: 'user-namer-two@email.com',
      },
    ]);
  });
});

describe('POST #index', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should create user and return created info', async () => {
    const response = await request(app)
      .post('/user')
      .send({
        name: 'User Name',
        email: 'email@provider.com',
        password: '123456',
      });

    const created_user = await User.findOne();

    expect(created_user.name).toBe('User Name');
    expect(created_user.email).toBe('email@provider.com');
    expect(created_user.email).toBe('email@provider.com');
    expect(await created_user.checkPassword('123456')).toBeTruthy();
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      name: 'User Name',
      email: 'email@provider.com',
    });
  });
});
