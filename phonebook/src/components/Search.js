

const Search = ({ searchValue, filterNamesChange }) => {
  return (
    <div>
      Filter results:
      <input 
        value={searchValue} 
        onChange={filterNamesChange}
      />
    </div>
  );
}

export default Search;