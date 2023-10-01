import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import "./movie-details.css";
import { Link } from 'react-router-dom';

export default function MovieDetail() {
    const { id } = useParams(); // Retrieve movie ID from URL using useParams
    const [movie, setMovie] = useState({});
    const apiUrl = `http://localhost:5000/api/movie-details/${id}`;


    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json()) // Parse the response as JSON and returns a JS object
            .then(data => setMovie(data)) // Set movies state with the response data
            .catch(error => console.error('Error fetching movies:', error));
    }, []); // The empty dependency array ensures this effect runs once after the initial render


    return (
        <div className="movie-list-background">
            <div className="movie-list-container">
                <img className="movie-image" src={"https://image.tmdb.org/t/p/w185" + movie.poster_path}></img>
                <div className='movie-data'>
                    <h1>{movie.title}</h1>
                    <p>Overview: {movie.overview}</p>
                    <p>Vote Average: {movie.vote_average} / 10</p>
                    <p>Release Date: {movie.release_date}</p>
                    <a href={movie.homepage}>Link to Movie Home Page</a>
                </div>
            </div>
            <Link to={"/"} className='link-back'>Back To Home Page </Link>
           
        </div>
    );

}

