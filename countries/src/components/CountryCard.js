

const CountryCard = ({ country }) => {

    console.log(country);
    let languages = [];


    for (let key in country.languages) {
        languages.push(country.languages[key]);
    }

    return (
        <div>
            <h1>{ country.name.common }</h1>
            <span style={{display: 'block'}}>capital: { country.capital }</span>
            <span>area: { country.area }</span>
            <h3>Languages:</h3>
            <ul>
                {languages.map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src={country.flags.png} alt="flag" />
        </div>
    );
}

export default CountryCard;