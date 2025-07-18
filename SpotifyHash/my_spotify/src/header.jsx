import React from 'react';
import spotifyLogo from './assets/Spotify_icon.png';
import {Link} from 'react-router-dom';
const header = () => {
  return (
    <header className='header'>
      <Link to="/">
        <h1>SPOTIFY</h1>
      </Link>
      <Link to="/">
        <img src={spotifyLogo} alt="Logo Spotify" />
      </Link>
    </header>
  )
}

export default header;
