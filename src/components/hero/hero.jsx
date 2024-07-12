import React from "react";
import MovieService from "../../services/movie-service";
import "./hero.scss";

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      description: null,
      backdrop_path: null,
      poster_path: null,
      id: null,
    };

    this.movieService = new MovieService();
    this.getMovie();
  }

  getMovie = () => {
    this.movieService.getRandomMovie().then((res) => this.setState(res));
  };

  render() {
    const { name, description, backdrop_path } = this.state;

    return (
      <div className="hero">
        <div className="hero__info">
          <h2>FIND MOVIES</h2>
          <h1>TV shows and more</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos eum
            ducimus perspiciatis, quo ipsa, qui consectetur repellendus autem
            non iste velit. Quasi natus saepe ullam, delectus aliquam corrupti
            repudiandae vero.
          </p>
          <button className="btn btn-primary">Details</button>
        </div>
        <div className="hero__movie">
          <img src={backdrop_path} alt="img" />

          <div className="hero__movie-descr">
            <h2>{name}</h2>
            <p>
              {description && description.length >= 250
                ? `${description.slice(0, 250)}...`
                : description}
            </p>
            <div>
              <button className="btn btn-secondary">Random movie</button>
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
