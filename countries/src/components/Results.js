import CountryListItem from "./CountryListItem";
import CountryView from "./CountryView";

const Results = ({ countries }) => {
    return (
        <div>
            {countries.length === 1 ? <CountryView country={countries[0]} /> : 
                                      countries.length > 10 ? 'Too many search results, specify another filter' : 
                                      countries.map(country => {
                                            return <CountryListItem key={country.name.common} country={country} />
                                        })}
        </div>
    );
}

export default Results;