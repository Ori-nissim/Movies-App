import React from 'react';
import './Movie.css'
import { Link } from 'react-router-dom';

function Movie({ movie }) {
  const { title, release_date, poster_path, vote_average, overview} = movie;

  const imageUrl = `https://image.tmdb.org/t/p/w185${poster_path}`;

  return (
    <div className="movie-item">
    <img src={imageUrl} alt={title} className="movie-poster" />
    <div className="movie-details">
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
      <p>{overview}</p>
      <p>{vote_average}/10</p>
      <p>Released In {release_date}</p>
      <button className="like-button">Like</button>
    </div>
  </div>
  );
}

export default Movie;
