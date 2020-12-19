import React from 'react';
import { movies } from '../data';

const Movies = () => {

  function movieGenres(genres) {
    return genres.map(genre => {
    return <li>{genre}</li>
    })
  }

  function allMovies() {
    return movies.map(movie => {
      return (<div> 
      <h1>{movie.title}</h1> 
      <p>{movie.time} minutes</p>
      <ul>
        {movieGenres(movie.genres)}
      </ul>
    </div>)
  })
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {allMovies()}
    </div>
  );
};

export default Movies;
