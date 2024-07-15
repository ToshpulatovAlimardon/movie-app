import ErrorBoundary from "../components/error-boundary/error-boundary";
import Hero from "../components/hero/hero";
import RowMovies from "../components/row-movies/row-movies";

const HomePage = () => {
  return (
    <div>
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <ErrorBoundary>
        <RowMovies />
      </ErrorBoundary>
    </div>
  );
};

export default HomePage;
