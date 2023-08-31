import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import './MovieList.css';

export default function MovieList(moviesList,title) {
  const [movies, setMovies] = useState([]);
  const apiUrl = `http://localhost:5000/api/movies`;

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json()) // Parse the response as JSON and returns a JS object
      .then(data => setMovies(data)) // Set movies state with the response data
      .catch(error => console.error('Error fetching movies:', error));
  }, []); // The empty dependency array ensures this effect runs once after the initial render

  return (
    <div className="movie-list-background">
      <div className="movie-list-container">
      <div className="row row-cols-4 row-cols-md-4">
          {movies?.map(movie => (
            <li key={movie.id} style={{display: 'flex',
            minWidth: '20%',
            maxWidth: '300px',}}>
              <Movie movie={movie} />
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

