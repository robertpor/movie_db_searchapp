import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

function App() {
  const [results, setResults] = useState(
    JSON.parse(localStorage.getItem('results')) || []
  );

  function handleClick(input) {
    localStorage.clear();
    setResults([]);
    axios
      .get(
        process.env.REACT_APP_MOVIE_DB_API +
          '/search/movie?api_key=' +
          process.env.REACT_APP_API_KEY +
          '&query=' +
          input
      )
      .then((res) => {
        setResults(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    localStorage.setItem('results', JSON.stringify(results));
  }, [results]);

  return (
    <>
      <SearchBar handleClick={handleClick} />
      {results.length > 0 ? <MovieList movies={results} /> : null}
    </>
  );
}

export default App;
