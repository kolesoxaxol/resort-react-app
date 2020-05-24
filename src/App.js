import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRomm from './pages/SingleRoom';
import Error from './pages/Error';


import NavBar from './components/Navbar';

import { Route, Switch } from 'react-router-dom'

function App() {
  return <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="rooms/:slug" component={SingleRomm} />
      <Route component={Error} />
    </Switch>
  </>;
}

export default App;
