import React  from 'react';
import './movie.css'
import { Link,useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Movie({ movie }) {
  const { title, release_date, poster_path, vote_average, overview } = movie;

  const imageUrl = `https://image.tmdb.org/t/p/w185${poster_path}`;

  const navigate = useNavigate();

  const showMovieDetails = (id) => {
    navigate(`/movies/${id}`)
  };

  return (
    <Card onClick={() => showMovieDetails(movie.id)} style={{ width: '18rem', flex: '1' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {overview.length < 150 ? overview: overview.substr(0,150) + "..." }
        </Card.Text>
        <span style={{ flex: '1' }}></span>
        <Button style={{ width: '30%' }} variant="primary">Like</Button>
      </Card.Body>
    </Card>
  );
}

