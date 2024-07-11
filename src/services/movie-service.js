class MovieService {
  _apiBase = "https://api.themoviedb.org/3";
  _apiLng = "language=en-US";
  _apiKey = "api_key=fa1db7f3384dc73528657aed19a19e0d";
  _apiImg = "https://image.tmdb.org/t/p/original";

  getResource = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    return await response.json();
  };

  getPopularMovies = async () => {
    return this.getResource(
      `${this._apiBase}/movie/popular?${this._apiLng}&${this._apiKey}`
    );
  };

  getTrandingMovies = async () => {
    return this.getResource(
      `${this._apiBase}/movie/top_rated?${this._apiLng}&${this._apiKey}`
    );
  };

  getDetailedMovie = async (id) => {
    return this.getResource(
      `${this._apiBase}/movie/${id}?${this._apiLng}&${this._apiKey}`
    );
  };
}

export default MovieService;
