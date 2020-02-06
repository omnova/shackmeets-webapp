import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppTitleBar from './components/AppTitleBar';
import Footer from './components/AppFooter';
import Home from './containers/Home';
import Archive from './containers/Archive';
import Preferences from './containers/Preferences';


export default function MainLayout() {
  return (
    <Router>
      <AppTitleBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/archive' component={Archive} />
        <Route exact path='/preferences' component={Preferences} />
      </Switch>
      <Footer />
    </Router>
  );
}
