import { Route, Routes } from "react-router-dom"
import Home from './components/Home'
<<<<<<< HEAD
import Layout from './components/Layout'
import Form from 'react-bootstrap/Form';
import Chat from './components/Chat'
import React from 'react'
import Conversion from './components/Conversion';
=======
import Landing from './components/Landing'
import './App.css'
>>>>>>> 6dd5c211aa48df1236680a8fbe04bdea95643924

function App() {

  return (
      <Routes>
<<<<<<< HEAD
        <Route exact path="/"> </Route> 
        <Route exact path="/home" component={<Home/>}> </Route>
        <Route exact path="/conversion" component={<Conversion/>}> </Route>
=======
        <Route exact path="/" element={<Landing/>}> </Route> 
        <Route exact path="/home" element={<Home/>}> </Route> 
>>>>>>> 6dd5c211aa48df1236680a8fbe04bdea95643924
      </Routes>
  );
}

export default App;
