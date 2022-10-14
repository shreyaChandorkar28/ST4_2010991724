import React, {Component} from  'react';
import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Navbar from './components/Navbar';
import Signup from './pages/Signup.js';
import Login from './pages/Login.js';
import Contact from './pages/Contact';
import StudentDetails from './pages/StudentDetails.js';
import Read from './Read.js'
import Update from './Update.js'
function App() {
  return (
 <div>
  <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/StudentDetails' element={<StudentDetails/>}/>
        <Route path='/Read' element={<Read/>}/>
        <Route path='/Update' element={<Update/>}/>
      </Routes>
    </div> 
  );
}

export default App;
