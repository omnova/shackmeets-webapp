import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/home/Home';
import AppTitleBar from './components/AppTitleBar';
import Footer from './components/Footer';


export default function MainLayout() {
  return (
    <Router>
      <AppTitleBar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}
