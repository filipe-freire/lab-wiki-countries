import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div>
      {props.countries.map((country) => (
        <Link
          className="list-group-item list-group-item-action"
          to={`/${country.cca3}`}
        >
          <span role="img" aria-label="country">
            <img
              src={`https://www.countryflags.io/${country.cca2.toLowerCase()}/flat/64.png`}
              alt=""
              style={{ maxWidth: '30px' }}
            />
          </span>{' '}
          {country.name.official}
        </Link>
      ))}
    </div>
  );
};

export default CountriesList;
