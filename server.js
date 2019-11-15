const express = require('express');

const server = express();

const projectRoutes = require('./resources/projects/projectRoutes');
const actionRoutes = require('./resources/actions/actionRoutes');

server.use(express.json());

server.use('/project', projectRoutes);
server.use('/action', actionRoutes);

module.exports = server;