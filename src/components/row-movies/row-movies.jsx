import RowMoviesItem from "../row-movies-item/row-movies-item";
import "./row-movies.scss";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import MovieInfo from "../movie-info/movie-info";
import React from "react";
import MovieService from "../../services/movie-service";

class RowMovies extends React.Component {
  state = {
    open: false,
    movies: [],
    movieId: null,
  };

  moviesService = new MovieService();

  componentDidMount() {
    this.getTrendingMovies();
  }

  onClose = () => this.setState({ open: false });

  onOpen = (id) => this.setState({ open: true, movieId: id });

  getTrendingMovies = () => {
    this.moviesService.getTrandingMovies().then((res) => {
      this.setState({ movies: res });
    });
  };

  render() {
    const { open, movies, movieId } = this.state;

    return (
      <div className="rowmovies">
        <div className="rowmovies__top">
          <div className="rowmovies__top-title">
            <img src="/tranding.svg" alt="" />
            <h1>Trending</h1>
          </div>
          <div className="hr"></div>
          <a href="#">See more</a>
        </div>

        <div className="rowmovies__lists">
          {movies.map((movie) => (
            <RowMoviesItem
              key={movie.id}
              movie={movie}
              onOpen={this.onOpen}
            />
          ))}
        </div>

        <Modal open={open} onClose={this.onClose}>
          <MovieInfo movieId={movieId}/>
        </Modal>
      </div>
    );
  }
}

export default RowMovies;
