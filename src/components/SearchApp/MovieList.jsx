import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
  function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result =
        a[property] < b[property] ? 1 : a[property] > b[property] ? -1 : 0;
      return result * sortOrder;
    };
  }

  let movies = props.movies || JSON.parse(localStorage.getItem('results'));

  movies = movies.sort(dynamicSort('popularity'));

  return (
    <div className='movie-list'>
      {movies.map((movie, index) => (
        <Movie key={index} data={movie} />
      ))}
    </div>
  );
};

export default MovieList;
