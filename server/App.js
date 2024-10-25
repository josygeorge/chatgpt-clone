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

/* import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [
    {
      "role": "user",
      "content": "who won the 2022 fifa world cup"
    },
    {
      "role": "assistant",
      "content": "I'm sorry, but as an AI, I do not have real-time information. The 2022 FIFA World Cup has not happened yet as it is scheduled to take place in Qatar from November to December 2022."
    }
  ],
  temperature: 1,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});
 */
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});