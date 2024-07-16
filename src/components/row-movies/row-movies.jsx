import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useLocation } from "react-router-dom";
import useMovieService from "../../services/movie-service";
import Error from "../error/error";
import MovieInfo from "../movie-info/movie-info";
import RowMoviesItem from "../row-movies-item/row-movies-item";
import Spinner from "../spinner/spinner";
import "./row-movies.scss";

const RowMovies = () => {
  const [open, setOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState(null);
  const [page, setPage] = useState(2);
  const [newItemLoading, setNewItemLoading] = useState(false);

  const { pathname } = useLocation();

  const { getTrandingMovies, getPopularMovies, loading, error } =
    useMovieService();

  useEffect(() => {
    getMovies();
  }, []);

  const onClose = () => setOpen(false);

  const onOpen = (id) => {
    setMovieId(id);
    setOpen(true);
  };

  const getMovies = (page) => {
    if (pathname === "/popular") {
      getPopularMovies(page)
        .then((res) => setMovies((movies) => [...movies, ...res]))
        .finally(() => setNewItemLoading(false));
    } else {
      getTrandingMovies(page)
        .then((res) => setMovies((movies) => [...movies, ...res]))
        .finally(() => setNewItemLoading(false));
    }
  };

  const getMoreMovies = () => {
    setNewItemLoading(true);
    setPage((page) => page + 1);
    getMovies(page);
  };

  const errorContent = error ? <Error /> : null;
  const loadingContent = loading ? <Spinner /> : null;

  return (
    <div className="rowmovies">
      <div className="rowmovies__top">
        <div className="rowmovies__top-title">
          <img src="/tranding.svg" alt="" />
          <h1>{pathname === "/popular" ? "Popular" : "Tranding"}</h1>
        </div>
        <div className="hr" />
        <a href="#">See more</a>
      </div>
      {errorContent}
      {loadingContent}

      <Content movies={movies} onOpen={onOpen} />

      <div className="rowmovies__loadmore">
        <button
          className="btn btn-secondary"
          onClick={getMoreMovies}
          disabled={newItemLoading}
        >
          Load More
        </button>
      </div>

      <Modal open={open} onClose={onClose}>
        <MovieInfo movieId={movieId} />
      </Modal>
    </div>
  );
};

export default RowMovies;

const Content = ({ movies, onOpen }) => {
  return (
    <div className="rowmovies__lists">
      {movies.map((movie) => (
        <RowMoviesItem key={movie.id} movie={movie} onOpen={onOpen} />
      ))}
    </div>
  );
};
Content.propTypes = {
  movies: PropTypes.array,
  onOpen: PropTypes.func,
};
