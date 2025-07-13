import React from 'react';
import spotifyLogo from './assets/spotify.png';
const header = () => {
  return (
    <header className='header'>
        <h1>SPOTIFY</h1>
        <img src={spotifyLogo} alt="Logo Spotify" />
    </header>
  )
}

export default header;
