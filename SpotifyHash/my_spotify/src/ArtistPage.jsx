import React from 'react'
import {Link, useParams} from 'react-router-dom';
import TravisScoot from './assets/Banner/TravisScoot.jpeg'
import { songsFromArtist } from './assets/songs.js';
import { artist } from './assets/artist.js';
const ArtistPage = () => {
  const {id} = useParams(); // Pega o ID da URL (ex: /dj/seanpaul)
  // Encontra o banner correspondente ao ID
  const currentBanner = artist.find((item) => item.id === Number(id));
  if(!currentBanner){
    console.log("Música não encontrada 😢");
  }

  const songs = songsFromArtist[id]; // acessa dinamicamente
  const allSongs = Object.values(songsFromArtist).flat();
  const Currentsong = allSongs.find(song => song.id === Number(id));

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
        allSongs.map((file) => (
          <div className='songAlign' key={file.id}>
            <div className='distancia'>
              <div className="esquerda">
                <span>{file.id}</span>
                <Link to={`/PlayMusic/${file.id}`}>
                  <img src={file.img} alt={`Foto da Música de ${file.artist}`} />
                </Link>
                <Link to={`/PlayMusic/${file.id}`}>
                  <span>{`${file.title} - ${file.artist}`}</span>
                </Link>
              </div>
              <span className='tempo'>{file.duration}</span>
            </div>
        </div>
        ))}
    </div>
    </>
  )
}

export default ArtistPage;