import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRomm from './pages/SingleRoom';
import Error from './pages/Error';

function App() {
  return <>
    <Home />
    <Rooms />
    <SingleRomm />
    <Error />
  </>;
}

export default App;
