FROM node:12-alpine

WORKDIR /app

RUN yarn install

EXPOSE 3000
