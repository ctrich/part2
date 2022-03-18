

const SearchField = ({ value, onSearchChange }) => {
    return (
        <div>
            Find Countries: 
            <input value={value} onChange={onSearchChange} />
        </div>
    );
}

export default SearchField;