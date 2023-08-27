import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Movie from '../Movie/Movie';
import './MovieList.css';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const apiUrl = `http://localhost:5000/api/movies`;

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json()) // Parse the response as JSON and returns a JS object
      .then(data => setMovies(data)) // Set movies state with the response data
      .catch(error => console.error('Error fetching movies:', error));
  }, ); // The empty dependency array ensures this effect runs once after the initial render

  return (
    <div className="movie-list-background">
      <div className="movie-list-container">
        <ul className="movie-list-ul">
          {movies.map(movie => (
            <li key={movie.id}>
              <Movie movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieList;
