const express = require('express');
const app = express();

// Load environment variables from .env file
require('dotenv').config();

// Access environment variables
const apiKey = process.env.API_KEY;
const port = process.env.PORT; // Use the specified port or default to 3000

const cors = require('cors'); // Import the cors middleware
app.use(cors()); // This allows all origins by default. You can customize it as needed.

// Import routes
const routes = require('./routes');

app.use('/api', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

  