const axios = require('axios');
const express = require('express');
const router = express.Router();

// All server routes are defined here


// All popular movies
router.get('/movies', (req, res) => {
 
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
      .then(response => {
        const movies = response.data.results;
        res.json(movies);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        res.status(500).json({ error: 'An error occurred while fetching movies.' });
      });
});

// Get specific movie
router.get('/movie-details/:id', async (req, res) => {
    try {
      const movieId = req.params.id;
  
      // Make a GET request to the TMDb API to fetch detailed movie information
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
      );
  
      // Extract the movie data from the response
      const movieData = response.data;
  
      res.json(movieData);
    } catch (error) {
      console.error('Error fetching movie details:', error);
      res.status(500).json({ error: 'An error occurred while fetching movie details.' });
    }
  });

module.exports = router;
