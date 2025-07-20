import './App.css';
import React from 'react';
import Header from './header.jsx';
import Home from './Home.jsx';
import Artists from './Artists.jsx';
import ArtistPage from './ArtistPage.jsx';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import SongList from './SongList.jsx';
import PlayMusic from './PlayMusic.jsx';
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
          <Routes>
              <Route path='/home' element={<Home />}/>
              <Route path='/artists' element={<Artists />}/>
              <Route path='/song/:id' element={<ArtistPage />}/>
              <Route path='/songs' element={<SongList />}/>
              <Route path='/PlayMusic/:id' element={<PlayMusic />}/>
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;