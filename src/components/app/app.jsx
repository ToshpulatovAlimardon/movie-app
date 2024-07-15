import { Route, Routes } from "react-router";
import Navbar from "../navbar/navbar";
import HomePage from "../../pages/home-page";
import TvPage from "../../pages/tv-page";
import DetailedPage from "../../pages/detailed-page";
import NotFoundPage from "../../pages/not-found-page";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/movie/:movieId" element={<DetailedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
