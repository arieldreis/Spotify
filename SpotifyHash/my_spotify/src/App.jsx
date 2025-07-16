import './App.css';
import React from 'react';
import Header from './header.jsx';
import Home from './Home.jsx';
import Artists from './Artists.jsx';
import {BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/artists' element={<Artists />}/>
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;