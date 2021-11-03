import React, { Component } from 'react';
import { Router, Switch, Route } from '../node_modules/react-router-dom';

//import About from "./About/About";
//import Contact from "./Contact/Contact";
//import Products from "./Product/Products";
import SignIn from './views/SignInSide';
import Home from './views/Home.js';
import AboutUs from './views/About_Us.js';
import history from './history';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Sign-in' exact component={SignIn} />
          <Route path='/about-us' exact component={AboutUs} />
          <Route path='/contact-us' exact component={Home} />
        </Switch>
      </Router>
    );
  }
}