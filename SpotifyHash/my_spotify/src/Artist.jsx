import React from 'react';
import { artist } from './assets/artist.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
const Artist = () => {
  return (
    <div className="container-artistas">
      {
        artist.slice(0, 30).map(file => (
            <div className='artistas' key={file.id}>
                <img src={file.img} alt={`Imagem do cantor(a) ${file.nome}`} />
                <p>{file.nome}</p>
                <p>Artista</p>
                <FontAwesomeIcon icon={faCirclePlay} className='icon_play'/>
            </div>
        ))}
    </div>
  )
}
export default Artist;
