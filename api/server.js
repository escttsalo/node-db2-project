const express = require("express");

const carsRouter = require('./cars/cars-router');

const server = express();

server.use(express.json());

server.use('/api/cars', carsRouter);

server.use('/', (req, res, next) => {
    res.status(200).json({message: "I L-I-V-E!"})
})

module.exports = server;
