import React, { useState } from 'react';

const SearchBar = function (props) {
  const [input, setInput] = useState('');

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    props.handleClick(input);
  }

  return (
    <div className='search-bar'>
      <h1>Search your favourite Movies</h1>
      <input type='text' onChange={handleChange} />
      <button onClick={handleClick}>Search Movies</button>
    </div>
  );
};

export default SearchBar;
