import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from './components/Home'
import Layout from './components/Layout'
import Form from 'react-bootstrap/Form';
import Chat from './components/Chat'
import React from 'react'
import Conversion from './components/Conversion';

function App() {

  return (
    <div className='App'>
      <img src="/images/Group.png"></img>
      <Layout/>
      <div className='chat-container'>
      <h2 className='welcome-text'>Welcome to Shario!
Throw anything in the chat. We’ll take care of the rest.</h2>
      <form className='searchchat'>
       <input className='input-searchchat' type="text" placeholder="  Search chat..."></input>
       </form>
       <div className='chatbar'>
       <table className='chatbox-buttons'>
       <th><input type="image" src="/images/pencil.png"/></th>
       <th><input type="image" src="/images/microphone.png"/></th>
       <th><input type="image" src="/images/docup.png"/></th>
       <th><input type="image" src="/images/photo.png"/></th>
       <th>
       <form>
       <input className='inputbox' type="text" placeholder="type..."></input>
       </form>
       </th>
       <th><input type="image" src="/images/pencil.png"/></th>
       </table>
       </div>
    </div>



      <Routes>
        <Route exact path="/"> </Route> 
        <Route exact path="/home" component={<Home/>}> </Route>
        <Route exact path="/conversion" component={<Conversion/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
