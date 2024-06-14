//import logo from './logo.svg';
//import './App.css';
import React from "react";
import Login from "./Login";
import Signup from "./Signup"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Profile from "./Profile";

function App() {
  return (
    
    <BrowserRouter>
     <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
              
          
     </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
