const Filter = ({ changeFilter, filterBy }) => {
  return (
    <div className="filter-buttons">
      <button
        className={filterBy === "all" ? "filter-on" : "filter-off"}
        onClick={() => {
          changeFilter("all");
        }}
      >
        All
      </button>
      <button
        className={filterBy === "active" ? "filter-on" : "filter-off"}
        onClick={() => {
          changeFilter("active");
        }}
      >
        Active
      </button>
      <button
        className={filterBy === "completed" ? "filter-on" : "filter-off"}
        onClick={() => {
          changeFilter("completed");
        }}
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
