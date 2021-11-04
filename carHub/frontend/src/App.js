import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home.js';
import SignInSide from './views/SignInSide';
import RegisterUser from './views/RegisterUser';
import AboutUs from './views/About_Us';
import history from './history';
import './App.css';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Sign-in' exact component={SignInSide} />
        <Route path='/register' exact component={RegisterUser} />
        <Route path='/about-us' exact component={AboutUs} />
        <Route path='/contact-us' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
