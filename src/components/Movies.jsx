import Movie from "./Movie";

function Movies({ listOfMovies, addFavorite }) {
  return (
    <>
      {listOfMovies.map((movie) => {
        return (
          <div className="col-md-3" key={movie.imdbID}>
            <Movie data={movie} isFavorite={addFavorite} />
          </div>
        );
      })}
    </>
  );
}

export default Movies;
