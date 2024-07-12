import React from "react";
import "./movie-info.scss";
import MovieService from "../../services/movie-service";
import Spinner from "../spinner/spinner";
import Error from "../error/error";

class MovieInfo extends React.Component {
  state = {
    movie: null,
    loading: true,
    error: false,
  };

  movieService = new MovieService();

  componentDidMount() {
    this.updateMovie();
  }

  updateMovie = () => {
    const { movieId } = this.props;
    if (!movieId) {
      this.setState({ error: true });
    }

    this.movieService
      .getDetailedMovie(movieId)
      .then((res) => this.setState({ movie: res }))
      .catch(() => this.setState({ error: true }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { movie, loading, error } = this.state;

    const errorContent = error ? <Error /> : null;
    const loadingContent = loading ? <Spinner /> : null;
    const content = !(error || loading) ? <Content movie={movie} /> : null;

    return (
      <div className="movieinfo">
        {errorContent}
        {loadingContent}
        {content}
      </div>
    );
  }
}

export default MovieInfo;

const Content = ({ movie }) => {
  return (
    <>
      <img src={movie.backdrop_path} alt="img" />

      <div className="hero__movie-descr">
        <h2>{movie.name}</h2>
        <p>{movie.description}</p>
      </div>
    </>
  );
};
