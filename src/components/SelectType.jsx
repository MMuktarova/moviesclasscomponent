function SelectType({ getType }) {
  return (
    <div>
      <select
        className="form-control ml-3"
        onChange={(event) => getType(event.target.value)}
      >
        <option value="Movie">Movie</option>
        <option value="Series">Series</option>
        <option value="Episodes">Episodes</option>
      </select>
    </div>
  );
}

export default SelectType;
