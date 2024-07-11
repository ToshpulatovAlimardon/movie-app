import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__info">
        <h2>FIND MOVIES</h2>
        <h1>TV shows and more</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos eum
          ducimus perspiciatis, quo ipsa, qui consectetur repellendus autem non
          iste velit. Quasi natus saepe ullam, delectus aliquam corrupti
          repudiandae vero.
        </p>
        <button className="btn btn-primary">Details</button>
      </div>
      <div className="hero__movie">
        <img src="/image1.svg" alt="img" />

        <div className="hero__movie-descr">
          <h2>Madellin</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit adipisci iure, corrupti ipsum eligendi perferendis
            aliquid cum nam consequuntur eveniet architecto vero. Numquam,
            magnam consequuntur? Totam magnam iste recusandae impedit?
          </p>
          <div>
            <button className="btn btn-secondary">Random movie</button>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
