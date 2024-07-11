import "./movie-info.scss";

const MovieInfo = () => {
  return (
    <div className="movieinfo">
      <img src="/image1.svg" alt="movie" />

      <div className="movieinfo-descr">
        <h1>Movie Title</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad
          atque ratione reprehenderit quam quibusdam consequuntur suscipit aut
          earum quaerat. Consequatur assumenda dolorem, reiciendis esse sed
          dolore sequi quidem sapiente.
        </p>
      </div>
    </div>
  );
};

export default MovieInfo;
