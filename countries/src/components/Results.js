import CountryListItem from "./CountryListItem";
import CountryCard from "./CountryCard";

const Results = ({ countries }) => {
    return (
        <div>
            {countries.length === 1 ? <CountryCard country={countries[0]} /> : 
                                      countries.length > 10 ? 'Too many search results, specify another filter' : 
                                      countries.map(country => {
                                            return <CountryListItem key={country.name.common} country={country.name.common} />
                                        })}
        </div>
    );
}

export default Results;