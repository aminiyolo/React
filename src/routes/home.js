import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import '../routes/home.css';

class Home extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {data:{data:{movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ isLoading: false, movies })
  };
  
  componentDidMount() {
    this.getMovies();
  };

  render() {
    const { isLoading, movies } = this.state;
    return(
      <section className="movie__container">{
        isLoading ?
          (<div className="loader">
            <span className="loader__text">Loading...</span>
          </div>) 
        : (<div className="movies">
        {movies.map(movie => (
            <Movie
              key={movie.id} 
              id={movie.id} 
              title={movie.title} 
              year={movie.year} 
              genres ={movie.genres} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
            />
            ))}
          </div>)
          }
      </section>
    )
  }
}

export default Home;
