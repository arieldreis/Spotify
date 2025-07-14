import React from 'react';
import spotifyLogo from './assets/spotify.png';
import {Link} from 'react-router-dom';
const header = () => {
  return (
    <header className='header'>
      <Link to="/home">
        <h1>SPOTIFY</h1>
      </Link>
      <Link to="/home">
        <img src={spotifyLogo} alt="Logo Spotify" />
      </Link>
    </header>
  )
}

export default header;
