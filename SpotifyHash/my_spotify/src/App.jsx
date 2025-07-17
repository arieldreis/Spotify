import './App.css';
import React from 'react';
import Header from './header.jsx';
import Home from './Home.jsx';
import Artists from './Artists.jsx';
import ArtistPage from './ArtistPage.jsx';
import {BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/artists' element={<Artists />}/>
              <Route path='/song/:id' element={<ArtistPage />}/>
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;