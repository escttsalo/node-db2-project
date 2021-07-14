const express = require("express");

const carsRouter = require('./cars/cars-router');

const server = express();

server.use(express.json());

server.use('/api/cards', carsRouter);

module.exports = server;
