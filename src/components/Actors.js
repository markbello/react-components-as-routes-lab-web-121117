import React from 'react';
import { actors } from '../data';

const Actors = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Actors Page</h1>
      {props.movieData.actors.map((actor) =>
        <div>
          <h1>{actor.name}</h1>
          <ul>
            {actor.movies.map((movie) =>
              <li>{movie}</li>
            )}
          </ul>
        </div>)}
    </div>
  );
};

export default Actors;
