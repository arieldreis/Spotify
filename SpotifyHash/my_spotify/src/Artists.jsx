import React from 'react';
import { artist } from './assets/artist.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const Artists = () => {
  return (
    <div>
        <div className="main">
            <h2>ARTISTAS POPULARES</h2>
            <div className="container-artistas">
                  {
                    artist.map(file => (
                        <div className='artistas' key={file.id}>
                            <img src={file.img} alt={`Imagem do cantor(a) ${file.nome}`} />
                            <p>{file.nome}</p>
                            <p>Artista</p>
                            <FontAwesomeIcon icon={faCirclePlay} className='icon_play'/>
                        </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default Artists
