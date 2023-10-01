const express = require('express');
const app = express();
const { checkConnection } = require('./dal/db');
var passport = require('passport');
var session = require('express-session');
const path = require('path');

// Load environment variables from .env file
require('dotenv').config();

// Access environment variables
const apiKey = process.env.API_KEY;
const port = process.env.PORT; // Use the specified port or default to 3000

const cors = require('cors'); // Import the cors middleware
app.use(cors()); // This allows all origins by default. You can customize it as needed.\

// enable the server to parse request bodies
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(session({ secret: 'super secret' })); //to make passport remember the user on other pages too.(Read about session store. I used express-sessions.)
app.use(passport.initialize());
app.use(passport.session());

// Routes
const moviesRouter = require('./routes/movie.routes');
const authRouter = require('./routes/auth.routes');
app.use('/api/', moviesRouter);
app.use('/api/auth', authRouter);
// END Routes

// Start the server
checkConnection().then(() => app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}))


