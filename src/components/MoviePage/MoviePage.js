// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Picture from './Picture';
import axios from 'axios';

function MoviePage() {
  const [movie, setMovie] = useState({});
  const location = useLocation();

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_MOVIE_DB_API +
          '/movie' +
          location.pathname +
          '?api_key=' +
          process.env.REACT_APP_API_KEY
      )
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>{movie.title}</h1>
      <Picture url={movie.backdrop_path} />
      <p>{movie.overview}</p>
      <p>Popularity: {movie.popularity}</p>
      <p>Original Language: {movie.original_language}</p>
      <p>Release Date: {movie.release_date}</p>
    </div>
  );
}
export default MoviePage;
