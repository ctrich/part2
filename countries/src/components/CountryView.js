import axios from "axios";
import { useEffect, useState } from "react";


const CountryView = ({ country }) => {
    const [weather, setWeather] = useState({});

    let languages = [];
    const api_key = process.env.REACT_APP_WEATHER;

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${api_key}&units=imperial`)
            .then(response => {
                setWeather(response.data);
            })
    }, []);

    const weatherLoading = JSON.stringify(weather) === '{}' ? '' : 
                                    <section>
                                        <h2>Weather in {country.capital}</h2>
                                        <div>temperature: {weather.main.temp} fahrenheit</div>
                                        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                                        <span>wind {weather.wind.speed}mph</span>
                                    </section>
    
    

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
            {weatherLoading}
        </div>
    );
}

export default CountryView;