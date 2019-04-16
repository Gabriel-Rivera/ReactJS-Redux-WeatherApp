import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => {
    const handWeatherlocationClick = city => {
        onSelectedLocation(city)
    };

    const getListCities = cities => (
        cities.map(city =>
            <WeatherLocation
                city={city.key}
                key={city.name}
                onWeatherLocationClick={() => handWeatherlocationClick(city.name)}
                data={city.data}
            />
        ))


    return (
        <div className="locationList">
            {getListCities(cities)}
        </div>
    )
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;