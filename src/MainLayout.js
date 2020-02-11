import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppTitleBar from './components/AppTitleBar';
import Footer from './components/AppFooter';
import Home from './containers/Home';
import Preferences from './containers/Preferences';


export default function MainLayout() {
  return (
    <Router>
      <AppTitleBar />
      <Switch>
        <Route exact path='/'>
          <Home filter="UPCOMING" />
        </Route>
        <Route exact path='/attending'>
          <Home filter="ATTENDING" />
        </Route>
        <Route exact path='/organizing'>
          <Home filter="ORGANIZING" />
        </Route>
        <Route exact path='/archive'>
          <Home filter="ARCHIVE" />
        </Route>
        <Route exact path='/attending'>
          <Home filter="UPCOMING" />
        </Route>
        <Route exact path='/preferences' component={Preferences} />
      </Switch>
      <Footer />
    </Router>
  );
}
