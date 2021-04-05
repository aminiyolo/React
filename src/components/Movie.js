import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom'; 
import './Movie.css';

function Movie({ title, year, genres, summary, poster}) {
    return(
      <Link to={{
        pathname:"/movie-detail",
        state: {
          title,
          year,
          genres,
          summary,
          poster,
        }
      }}>
        <div className="movie">
            <img className="movie__img" src={poster} alt={title}></img>
          <div className="movie__info">
            <h3 className="movie__title">Title: {title}</h3>
            <h4 className="movie__year">Release Year: {year}</h4>
            <ul className="movie__genres">
              {genres.map( (genre, index) => (
                <li key={index} className="genre">{genre}</li>))}
            </ul>
                <p className="movie__summary">Summary: {summary.slice(0, 150)}...</p>
          </div>
        </div>
    </Link>
  )
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,  
}

export default Movie;