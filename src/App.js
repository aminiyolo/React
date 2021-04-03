import React, {Component} from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {data:{data:{movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false, })
  };
  
  componentDidMount() {
    this.getMovies();
  };

  render() {
    const { isLoading, movies } = this.state;
    console.log(movies);
    return(
      <div>{isLoading ? "Loading..." : movies.map(movie => {
        return(
          <Movie
            key={movie.id} 
            id={movie.id} 
            title={movie.title} 
            year={movie.year} 
            genres ={movie.genres} 
            summary={movie.summary} 
            poster={movie.medium_cover_image}
          />);
        })}
      </div>
    )
  }
}

export default App;
