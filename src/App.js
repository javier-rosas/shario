import { Route, Routes } from "react-router-dom"
import Home from './components/Home'
import React from 'react'
import Conversion from './components/Conversion';
import Landing from './components/Landing'
import './App.css'

function App() {

  return (
      <Routes>
        <Route exact path="/" element={<Landing/>}> </Route> 
        <Route exact path="/home" component={<Home/>}> </Route>
        <Route exact path="/conversion" component={<Conversion/>}> </Route>
      </Routes>
  );
}

export default App;
