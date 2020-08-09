import React from 'react';
import { useHistory } from 'react-router-dom';

const Movie = (props) => {
  const history = useHistory();

  function handleClick(e) {
    history.push(`/${props.data.id}`);
  }

  const imagePath = 'https://image.tmdb.org/t/p/w200/' + props.data.poster_path;

  return (
    <div onClick={handleClick} className='movie-card'>
      {props.data.poster_path === null ? (
        <h2>No Picture available</h2>
      ) : (
        <img src={imagePath} alt='Movie Poster' />
      )}

      <h3>{props.data.title}</h3>
    </div>
  );
};

export default Movie;
