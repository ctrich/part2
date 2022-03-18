import { useState, useEffect } from "react";
import axios from "axios";
import SearchField from "./components/SearchField";
import Results from "./components/Results";

const App = () => {

const [countries, setCountries] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {
  axios
      .get(`https://restcountries.com/v3.1/all`)
      .then(response => {
        setCountries(response.data);
      })
}, []);

const onSearchChange = (event) => {
  setSearchTerm(event.target.value);
}

const filteredResults = countries.filter(country => {
  return country.name.common.toLowerCase().includes(searchTerm.toLocaleLowerCase());
})


  return (
    <div>
      <SearchField value={searchTerm} onSearchChange={onSearchChange} />
      <Results countries={filteredResults} />
    </div>
  );
}

export default App;
