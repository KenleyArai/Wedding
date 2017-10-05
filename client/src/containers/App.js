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
              <Route path="/rsvp" component={RsvpPage} />
              <Route path="/registry" component={RegistryPage}/>
              <Route path="/dates" component={DatesPage}/>
              <Route path="/logistics" component={LogisticsPage}/>
            </Switch>
            </div>
          </Router>
          );
    }
}
