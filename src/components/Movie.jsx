function Movie({ data, isFavorite }) {
  const { Title, Poster, Year } = data;
  return (
    <div className="card">
      <img src={Poster} alt={Title} className="card-img-top" />
      <div className="card-body">
        <p>
          {Title} - {Year}
        </p>
        <button
          className="btn btn-sm btn-success"
          onClick={() => isFavorite(Title)}
        >
          Add to Favorites
        </button>
      </div>
    </div>
  );
}

export default Movie;