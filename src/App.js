import './App.css'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Contact from './pages/Contact';
import Home from './pages/Home'
import React from 'react'
import SignUp from './pages/SignUp'
import Survey from './pages/Survey';
import Team from './pages/Team';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={Home}  />
        <Route path='/signup' exact component={SignUp}  />
        <Route path='/survey' exact component={Survey}  />
        <Route path='/teams' exact component={Team}  />
        <Route path='/contact' exact component={Contact}  />
      </Switch>
    </Router>
  </>
  );
}

export default App;
