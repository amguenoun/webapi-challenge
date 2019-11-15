const express = require('express');

const server = express();

const projectRoutes = require('./projects/projectRoutes');

server.use(express.json());

server.use('/project', projectRoutes);

module.exports = server;