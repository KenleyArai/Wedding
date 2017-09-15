import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import MediaQuery from 'react-responsive';

import './App.css';

import HomePage from 'containers/HomePage'
import RsvpPage from 'containers/RsvpPage'
import RegistryPage from 'containers/RegistryPage'
import DatesPage from 'containers/DatesPage'
import LogisticsPage from 'containers/LogisticsPage'
import Navbar from 'components/Navbar'

export default class App extends React.Component {
    render() {
        return (
          <Router>
          <div>
            <Navbar logo={ <span id='nav-logo'>K &amp; L</span>} />
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/RSVP" component={RsvpPage} />
              <Route exact path="/Registry" component={RegistryPage}/>
              <Route exact path="/Dates" component={DatesPage}/>
              <Route exact path="/Logistics" component={LogisticsPage}/>
            </Switch>
            </div>
          </Router>
          );
    }
}
