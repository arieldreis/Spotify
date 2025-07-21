import React from 'react'
import {Link, useParams} from 'react-router-dom';
import { songsFromArtist } from './assets/songs.js';
import { artist } from './assets/artist.js';
const ArtistPage = () => {
  const {id} = useParams(); // Pega o ID da URL (ex: /dj/seanpaul)
  // Encontra o banner correspondente ao ID
  const idNumber = Number(id);
  const currentBanner = artist.find((item) => item.id === idNumber);
  if(!currentBanner){
    console.log("Música não encontrada 😢");
  }
  const Top10 = songsFromArtist[idNumber]?.slice(0, 10) || [];

  // Songs de acordo com o Id da música.

  return (
    <>
      {
        <div key={currentBanner.id} className='bannerArtista'>
            <img src={currentBanner.banner} alt={`Banner do Artista ${currentBanner.nome}`} />
            <h1>{currentBanner.nome}</h1>
          </div>
        }
    <div className='songFromArtist'>
      <h2>Populares</h2>
      {
        Top10.map((musica) => (
          <div className='songAlign' key={musica.id}>
            <div className='distancia'>
              <div className="esquerda">
                <span>{musica.id}</span>
                <Link to={`/PlayMusic/${musica.id}`}>
                  <img src={musica.img} alt={`Foto da Música de ${musica.artist}`} />
                </Link>
                <Link to={`/PlayMusic/${musica.id}`}>
                  <span>{`${musica.title} - ${musica.artist}`}</span>
                </Link>
              </div>
              <span className='tempo'>{musica.duration}</span>
            </div>
        </div>
        ))}
    </div>
    </>
  )
}

export default ArtistPage;