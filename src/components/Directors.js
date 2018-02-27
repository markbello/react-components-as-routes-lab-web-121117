import React from 'react';
import { directors } from '../data';

const Directors = (props) => {
  return (
    <div>
      <h2>Directors Page</h2>
      {props.movieData.directors.map((director) =>
        <div>
          <h1>{director.name}</h1>
          <ul>
            {director.movies.map((movie) =>
              <li>{movie}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Directors
