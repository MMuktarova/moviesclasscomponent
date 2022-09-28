function InputSearch({ getMovie }) {
  return (
    <input
      placeholder="Movie to Search"
      className="form-control"
      onChange={(event) => getMovie(event.target.value)}
    />
  );
}

export default InputSearch;

