import React from 'react';
import propTypes from 'prop-types';

function Movie({ key, id, title, year, genres, summary, poster}) {
  return(
    <div>
      <h4>{title}</h4>
      <h4>{year}</h4>
      <h4>[{genres}]</h4>
      <h4>{summary}</h4>
      <img src={poster}></img>
    </div>
  )
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  genres: propTypes.array.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,  
}

export default Movie;