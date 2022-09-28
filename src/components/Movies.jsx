import Movie from "./Movie";

function Movies({ listOfMovies, handlerFavorite, btnClass, btnText }) {
  return (
    <>
      {listOfMovies.map((movie) => {
        return (
          <div className="col-md-3" key={movie.imdbID}>
            <Movie
              data={movie}
              handlerFavorite={handlerFavorite}
              btnClass={btnClass}
              btnText={btnText}
            />
          </div>
        );
      })}
    </>
  );
}

export default Movies;

