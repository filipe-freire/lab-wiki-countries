import React from 'react';
import './App.css';
import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar title="WikiCountries" />
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <div className="list-group">
              <CountriesList countries={countries} />
            </div>
          </div>
          <Switch>
            <Route path="/:id" component={CountryDetails} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
