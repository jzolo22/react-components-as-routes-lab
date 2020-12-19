import React from 'react';
import { directors } from '../data';

const Directors = () => {

  function directorMovies(movies) {
    return movies.map(movie => <li>{movie}</li>)
  }

  function allDirectors() {
    return directors.map(director => {
      return (
      <div>
        <h3>{director.name}</h3>
        <ul>
          {directorMovies(director.movies)}
        </ul>
      </div>)
    })
  }
  
  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors()}
    </div>
  );
}

export default Directors
