import './App.css'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './pages/Home'
import React from 'react'
import SignUp from './pages/SignUp'

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={Home}  />
        <Route path='/signup' exact component={SignUp}  />
      </Switch>
    </Router>
  </>
  );
}

export default App;
