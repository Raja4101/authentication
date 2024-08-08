import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import Home from "./components/home/Home";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
    </Routes>
   </Router>
  );
}

export default App;
