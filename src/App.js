import './App.css'
import Code from './components/QR'
import { Route, Routes } from "react-router-dom"
import Home from './components/Home'


function App() {

  return (
    <div className='App'>
      <br/>
      <br/>
      {/* <Code/> */}
      <br/>
      <br/>
      <Routes>
        {/* <Route exact path="/" element={<App/>}> </Route> */}
        <Route exact path="/home" element={<Home/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
