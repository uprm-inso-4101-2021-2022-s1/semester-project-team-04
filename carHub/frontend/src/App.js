import React from 'react';
import './App.css';
import history from './history';
import { Router } from '../node_modules/react-router-dom';
import Navigation from '../node_modules/react-bootstrap/Navbar';
import Routes from './Routes';

function App() {
  return (
    <Router history={history}>
      <div className='App'>
        <Navigation />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
