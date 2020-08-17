import React from 'react';
import countriesDB from './../countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const country = countriesDB.filter(
    (country) => country.cca3 === props.match.params.id
  )[0];
  return (
    <div className="col-7">
      <h1>{country.name.official}</h1>
      {console.log(country)}
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.length
                  ? country.borders.map((border) => (
                      <li>
                        <Link to={`/${border}`}>
                          {' '}
                          {
                            countriesDB.filter(
                              (country) => country.cca3 === border
                            )[0].name.official
                          }{' '}
                        </Link>
                      </li>
                    ))
                  : 'Country has no borders'}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
