FROM node:12-alpine

WORKDIR /app

RUN yarn install

RUN NODE_ENV=test yarn sequelize db:create
RUN NODE_ENV=test yarn sequelize db:migrate
