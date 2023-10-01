import React, { useEffect, useState } from 'react';
import Movie from '../movie/movie.component';
import './movie-list.css';

export default function MovieList(props) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = `http://localhost:5000/api/movies`;


  useEffect(() => {
   fetchMovieList(apiUrl);
  }, []); // The empty dependency array ensures this effect runs once after the initial render

    let content = <h4>Loading Movies...</h4>; 

    if (movies.length > 0) {
      content=movies;

    }

    if (error) {
      content=<p>{error.message}</p>;
    }
 
    async function fetchMovieList(apiUrl) {
      setIsLoading(true);
      setError(null);
  
      try {
        const response = await fetch(apiUrl);
  
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
  
        const data = await response.json();
  
        let mappedMovies = data?.map(movie => (
          <li key={movie.id} style={{display: 'flex',
          minWidth: '20%',
          maxWidth: '200px',}}>
            <Movie movie={movie} />
          </li>
        ));
  
        setMovies(mappedMovies);
      }
      catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }
    
  return (
    <div className="movie-list-background">
        <h3 className='title'>{props.title}</h3>
      <div className="movie-list-container">
      <div className="row row-cols-4 row-cols-md-4">
          {content}
        </div>
      </div>
    </div>
  );
}


