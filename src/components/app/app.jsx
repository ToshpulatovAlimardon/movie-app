import ErrorBoundary from "../error-boundary/error-boundary";
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";
import RowMovies from "../row-movies/row-movies";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ErrorBoundary>
        <RowMovies />
      </ErrorBoundary>
    </div>
  );
};

export default App;
