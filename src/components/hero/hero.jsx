import React from "react";
import MovieService from "../../services/movie-service";
import "./hero.scss";
import Spinner from "../spinner/spinner";
import Error from "../error/error";

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      error: false,
    };

    this.movieService = new MovieService();
    this.getMovie();
  }

  getMovie = () => {
    this.movieService
      .getRandomMovie()
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
      <div className="hero">
        <div className="hero__info">
          <h2>FIND MOVIES</h2>
          <h1>TV shows and more</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos eum
            ducimus perspiciatis, quo ipsa, qui consectetur repellendus autem
            non iste velit. Quasi natus saepe ullam, delectus aliquam corrupti
            repudiandae vero.
          </p>
          <button className="btn btn-primary">Details</button>
        </div>
        <div className="hero__movie">
          {errorContent}
          {loadingContent}
          {content}
        </div>
      </div>
    );
  }
}

export default Hero;

const Content = ({ movie }) => {
  return (
    <>
      <img src={movie.backdrop_path} alt="img" />

      <div className="hero__movie-descr">
        <h2>{movie.name}</h2>
        <p>
          {movie.description && movie.description.length >= 250
            ? `${movie.description.slice(0, 250)}...`
            : movie.description}
        </p>
        <div>
          <button className="btn btn-secondary">Random movie</button>
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </>
  );
};
