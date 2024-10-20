import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home.js';
import Event from './components/Event/Event.js';
import Service from './components/Service/Service.js';
import Help from './components/Help/Help.js';
import Login from './components/Auth/Login.js';
import Register from './components/Auth/Register.js';
import Organizer from './components/Dashboard/Organizer.js';
import User from './components/Dashboard/User.js';
import RegisterO from './components/OAuth/RegisterO.js';
import LoginO from './components/OAuth/LoginO.js';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Organizer" element={<Organizer />} />
          <Route path="/User" element={<User/>} />
          <Route path="/organizer/register" element={<RegisterO/>} />
          <Route path="/organizer/login" element={<LoginO/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
