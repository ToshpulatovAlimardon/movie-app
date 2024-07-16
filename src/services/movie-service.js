import { useHttp } from "../hooks/use-http";

const useMovieService = () => {
  const { request, loading, error, clearError } = useHttp();

  const _apiBase = "https://api.themoviedb.org/3";
  const _apiLng = "language=en-US";
  const _apiKey = "api_key=fa1db7f3384dc73528657aed19a19e0d";
  const _apiImg = "https://image.tmdb.org/t/p/original";
  const _apiPage = 1;

  const getPopularMovies = async (page = _apiPage) => {
    const response = await request(
      `${_apiBase}/movie/popular?${_apiLng}&page=${page}&${_apiKey}`
    );
    const movies = response.results;
    return movies && movies.map((movie) => _transformMovie(movie));
  };

  const getTrandingMovies = async (page = _apiPage) => {
    const response = await request(
      `${_apiBase}/movie/top_rated?${_apiLng}&page=${page}&${_apiKey}`
    );
    const movies = response.results;
    return movies && movies.map((movie) => _transformMovie(movie));
  };

  const getDetailedMovie = async (id) => {
    const movie = await request(
      `${_apiBase}/movie/${id}?${_apiLng}&${_apiKey}`
    );
    return _transformMovie(movie);
  };

  const getRandomMovie = async () => {
    const res = await getPopularMovies();
    const movie = res[Math.floor(Math.random() * res.length)];
    return movie;
  };

  const _transformMovie = (movie) => {
    return {
      name: movie.original_title,
      description: movie.overview,
      backdrop_path: `${_apiImg}${movie.backdrop_path}`,
      poster_path: `${_apiImg}${movie.poster_path}`,
      id: movie.id,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
    };
  };

  return {
    getTrandingMovies,
    getRandomMovie,
    getDetailedMovie,
    getPopularMovies,
    clearError,
    loading,
    error,
  };
};

export default useMovieService;
