const express = require('express')
const cors = require('cors');
require('dotenv').config;
const port = 8080;


const app = express();

// middleware
app.use(cors())
app.use(express.json())

// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('Hello, this is the homepage!');
});

// Define a route for /about
app.get('/about', (req, res) => {
    res.send('Welcome to the about page!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});