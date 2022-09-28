function Movie({ data, handlerFavorite, btnClass, btnText }) {
  const { Title, Poster, Year } = data;
  return (
    <div className="card">
      <img src={Poster} alt={Title} className="card-img-top" />
      <div className="card-body">
        <p>
          {Title} - {Year}
        </p>
        <button
          className={`btn btn-sm btn-${btnClass}`}
          onClick={() => handlerFavorite(data)}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Movie;
