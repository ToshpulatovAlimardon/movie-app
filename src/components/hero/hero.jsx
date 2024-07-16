import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useMovieService from "../../services/movie-service";
import Error from "../error/error";
import Spinner from "../spinner/spinner";
import "./hero.scss";

const Hero = () => {
  const [movie, setMovie] = useState(null);

  const { getRandomMovie, error, loading, clearError } = useMovieService();

  useEffect(() => {
    updateMovie();
  }, []);

  const updateMovie = async () => {
    clearError();
    getRandomMovie().then((res) => setMovie(res));
  };

  const errorContent = error ? <Error /> : null;
  const loadingContent = loading ? <Spinner /> : null;
  const content = !(error || loading || !movie) ? (
    <Content movie={movie} />
  ) : null;

  return (
    <div className="hero">
      <div className="hero__info">
        <h2>FIND MOVIES</h2>
        <h1>TV shows and more</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sunt
          necessitatibus veritatis labore provident similique neque praesentium
          debitis maiores. Nihil consectetur, veniam labore magnam ab similique
          optio perferendis error earum.
        </p>
        <div>
          <button className="btn btn-secondary" onClick={updateMovie}>
            Random Movie
          </button>
        </div>
      </div>
      <div className="hero__movie">
        {errorContent}
        {loadingContent}
        {content}
      </div>
    </div>
  );
};

export default Hero;

const Content = ({ movie }) => {
  const navigate = useNavigate();

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
        <button
          className="btn btn-primary"
          onClick={() => navigate(`/movie/${movie.id}`)}
        >
          Details
        </button>
      </div>
    </>
  );
};

Content.propTypes = {
  movie: PropTypes.object,
};
