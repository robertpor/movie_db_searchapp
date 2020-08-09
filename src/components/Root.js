import React from 'react';
import { Route } from 'react-router-dom';

import SearchApp from './SearchApp/SearchApp';
import MoviePage from './MoviePage/MoviePage';

const Root = () => {
  return (
    <>
      <Route component={SearchApp} exact path='/' />
      <Route component={MoviePage} path='/:id' />
    </>
  );
};

export default Root;
