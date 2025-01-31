import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import React from 'react';
import Footer from './navbar/Footer';
import Navbar from './navbar/Navbar';
import HomePage from './pages/HomePage';
import './App.css';
import NotFound from './pages/NotFound';
import ListUserAxios from './pages/ListUserAxios';
import ListUserFlech from './pages/ListUserFetch';
import Inscription from './pages/Inscription';
import Modification from './pages/Modification';
import Suppression from './pages/Suppression';

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/listAxios' element={<ListUserAxios/>}/>
        <Route path='/listFlech' element={<ListUserFlech/>}/>
        <Route path='/options/1' element={<Inscription/>}/>
        <Route path='/options/2' element={<Modification/>}/>
        <Route path='/options/3' element={<Suppression/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;