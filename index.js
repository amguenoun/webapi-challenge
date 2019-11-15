require('dotenv').config();

const server = require('./server');

const PORT = process.env.PORT || 5000;

server.list(PORT, () => {
    console.log(`Server is running on port ${port}`);
})