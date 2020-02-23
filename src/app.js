const express = require('express');

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());

    if (process.env.NODE_ENV !== 'production') {
      require('./middleware/load_local_envs');
    }
  }

  routes() {
    this.express.use(require('./app/routes'));
  }
}

module.exports = new AppController().express;
