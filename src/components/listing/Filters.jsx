function Filter({ handleInputFilter, handleSubmit }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="filter">Filtrer</label>
      <input
        type=" text"
        name="filter"
        id="filter"
        className="input"
        placeholder="Spain..."
        onInput={handleInputFilter}
      />
    </form>
  );
}

export default Filter;
