import MovieService from "../../services/movie-service";
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";
import RowMovies from "../row-movies/row-movies";

const App = () => {
  const movieService = new MovieService();

  movieService.getDetailedMovie(278).then((data) => console.log(data));

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <RowMovies />
    </div>
  );
};

export default App;
