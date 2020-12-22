const Filter = ({ changeFilter }) => {
  return (
    <div className="filter-buttons">
      <button
        onClick={() => {
          changeFilter("all");
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          changeFilter("active");
        }}
      >
        Active
      </button>
      <button
        onClick={() => {
          changeFilter("completed");
        }}
      >
        Complete
      </button>
    </div>
  );
};

export default Filter;
