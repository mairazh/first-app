import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Menu from './Menu';



function App() {

  const [token, setToken] = useState(sessionStorage.getItem(
    'token'
  ));

  if(!token){
    return <Login setToken={setToken}/>
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
