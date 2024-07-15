import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useMovieService from "../../services/movie-service";
import "./detailed-movie.scss";
import { useParams } from "react-router";
import Spinner from "../spinner/spinner";
import Error from "../error/error";

const DetailedMovie = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  const { getDetailedMovie, loading, error } = useMovieService();

  useEffect(() => {
    updateMovie();
  }, [movieId]);

  const updateMovie = () => {
    if (!movieId) {
      return;
    }

    getDetailedMovie(movieId).then((res) => setMovie(res));
  };

  const initialContent = movie || loading || error ? null : <Spinner />;
  const errorContent = error ? <Error /> : null;
  const loadingContent = loading ? <Spinner /> : null;
  const content = !(error || loading || !movie) ? (
    <Content movie={movie} />
  ) : null;

  return (
    <>
      {initialContent}
      {errorContent}
      {loadingContent}
      {content}
    </>
  );
};

export default DetailedMovie;

const Content = ({ movie }) => {
  return (
    <div className="detailedmovie">
      <div className="detailedmovie__image">
        <img src={movie.poster_path} alt={movie.name} />
      </div>
      <div className="detailedmovie__descr">
        <h1>{movie.name}</h1>
        <p>{movie.description}</p>
        <div className="detailedmovie__descr-info">
          <img src="/date.svg" alt="" />
          <p>{movie.release_date}</p>
          <div className="dot"></div>
          <p>{movie.vote_average.toFixed(1)}</p>
          <img src="/star.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  movie: PropTypes.object,
};
