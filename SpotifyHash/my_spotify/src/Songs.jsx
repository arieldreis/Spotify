import React from 'react'
import { songsFromArtist } from './assets/songs.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import OneDirection from './assets/Singers/OneDirection.jpg'
const Songs = () => {
  const {id} = useParams();
  const allSongs = Object.values(songsFromArtist).flat();
  const Currentsong = allSongs.find(song => song.id === Number(id));

  return (
    <div className="container-artistas">
      {
        allSongs.slice(0, 350).map(file => (
            <Link to={`/PlayMusic/${file.id}`} key={file.id}>
              <div className='artistas' key={file.id}>
                  <img src={file.img} alt={`Imagem do cantor(a) ${file.artist}`} />
                  <p>{file.title}</p>
                  <p>{file.artist}</p>
                  <FontAwesomeIcon icon={faCirclePlay} className='icon_play'/>
              </div>
            </Link>
        ))}
    </div>
  )
}

export default Songs
   