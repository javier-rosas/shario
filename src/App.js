import { Route, Routes } from "react-router-dom"
import Home from './components/Home'
import Landing from './components/Landing'
import './App.css'

function App() {

  return (
      <Routes>
        <Route exact path="/" element={<Landing/>}> </Route> 
        <Route exact path="/home" element={<Home/>}> </Route> 
      </Routes>
  );
}

export default App;
