import { useState, useEffect } from "react";
import axios from "axios";
import SearchField from "./components/SearchField";

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
      {filteredResults.map(country => <p key={country.name.common}>{country.name.common}</p>)}
    </div>
  );
}

export default App;
