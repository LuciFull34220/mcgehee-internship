FROM node:20

RUN apt-get update && apt-get install bash

WORKDIR /var/www

COPY ../../package*.json ./

RUN npm -g install nodemon bunyan sequelize-cli

