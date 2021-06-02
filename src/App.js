import './App.css'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Event from './pages/Event';
import Home from './pages/Home'
import React from 'react'
import SignUp from './pages/SignUp'
import Survey from './pages/Survey';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={Home}  />
        <Route path='/signup' exact component={SignUp}  />
        <Route path='/survey' exact component={Survey}  />
        <Route path='/events' exact component={Event}  />
      </Switch>
    </Router>
  </>
  );
}

export default App;
