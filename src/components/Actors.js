import React from 'react';
import { actors } from '../data';

const Actors = () => {

  function actorMovies(movies) {
    return movies.map(movie => <li>{movie}</li>)
  }

  function allActors() {
    return actors.map(actor => {
      return (
        <div>
          <h3>{actor.name}</h3>
          <ul>
            {actorMovies(actor.movies)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {allActors()}
    </div>
  );
};

export default Actors;
