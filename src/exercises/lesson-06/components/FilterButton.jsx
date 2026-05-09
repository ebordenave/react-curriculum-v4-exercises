function FilterButton({ filter, setFilter }) {
  const filterStatus = ['all', 'pending', 'completed'];

  return (
    <div>
      {filterStatus.map((status) => (
        <button
          onClick={() => setFilter(status)}
          key={status}
          style={{
            backgroundColor:
              filter === status ? 'lightblue' : 'white',
            fontWeight:
              filter === status ? 'bold' : 'normal',
          }}
        >
          {status}
        </button>
      ))}
    </div>
  );
}

export default FilterButton;
