class MovieService {
  getResource = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    return await response.json();
  };

  getPopularMovies = async () => {
    return this.getResource(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&fa1db7f3384dc73528657aed19a19e0d"
    );
  };

  getallTranding = async () => {};
}

export default MovieService;
