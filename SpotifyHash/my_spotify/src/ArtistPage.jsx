import React from 'react'
import {Link} from 'react-router-dom';
import TravisScoot from './assets/Banner/TravisScoot.jpeg'
const ArtistPage = () => {
  return (
    <>
      <div className='bannerArtista'>
          <img src={TravisScoot} alt={`Banner do Artista ${TravisScoot}`} />
          <h1>Travis Scott</h1>
      </div>
    <div className='songFromArtist'>
      <h2>Populares</h2>
      <div className='songAlign'>
        <div className='distancia'>
          <div className="esquerda">
            <span>1</span>
            <img src={TravisScoot} alt={`Foto da Música de ${TravisScoot}`} />
            <span>SICKO MODE</span>
          </div>
          <span className='tempo'>05:12</span>
        </div>
      </div>
      <div className='songAlign'>
        <div className='distancia'>
          <div className="esquerda">
            <span>2</span>
            <img src={TravisScoot} alt={`Foto da Música de ${TravisScoot}`} />
            <span>SICKO MODE</span>
          </div>
          <span className='tempo'>05:12</span>
        </div>
      </div>
      <div className='songAlign'>
        <div className='distancia'>
          <div className="esquerda">
            <span>3</span>
            <img src={TravisScoot} alt={`Foto da Música de ${TravisScoot}`} />
            <span>SICKO MODE</span>
          </div>
          <span className='tempo'>05:12</span>
        </div>
      </div>
      <div className='songAlign'>
        <div className='distancia'>
          <div className="esquerda">
            <span>4</span>
            <img src={TravisScoot} alt={`Foto da Música de ${TravisScoot}`} />
            <span>SICKO MODE</span>
          </div>
          <span className='tempo'>05:12</span>
        </div>
      </div>
      <div className='songAlign'>
        <div className='distancia'>
          <div className="esquerda">
            <span>5</span>
            <img src={TravisScoot} alt={`Foto da Música de ${TravisScoot}`} />
            <span>SICKO MODE</span>
          </div>
          <span className='tempo'>05:12</span>
        </div>
      </div>
      <div className='songAlign'>
        <div className='distancia'>
          <div className="esquerda">
            <span>6</span>
            <img src={TravisScoot} alt={`Foto da Música de ${TravisScoot}`} />
            <span>SICKO MODE</span>
          </div>
          <span className='tempo'>05:12</span>
        </div>
      </div>
      <div className='songAlign'>
        <div className='distancia'>
          <div className="esquerda">
            <span>7</span>
            <img src={TravisScoot} alt={`Foto da Música de ${TravisScoot}`} />
            <span>SICKO MODE</span>
          </div>
          <span className='tempo'>05:12</span>
        </div>
      </div>
      <div className='songAlign'>
        <div className='distancia'>
          <div className="esquerda">
            <span>9</span>
            <img src={TravisScoot} alt={`Foto da Música de ${TravisScoot}`} />
            <span>SICKO MODE</span>
          </div>
          <span className='tempo'>05:12</span>
        </div>
      </div>
      <div className='songAlign'>
        <div className='distancia'>
          <div className="esquerda">
            <span>9</span>
            <img src={TravisScoot} alt={`Foto da Música de ${TravisScoot}`} />
            <span>SICKO MODE</span>
          </div>
          <span className='tempo'>05:12</span>
        </div>
      </div>
      <div className='songAlign'>
        <div className='distancia'>
          <div className="esquerda">
            <span>10</span>
            <img src={TravisScoot} alt={`Foto da Música de ${TravisScoot}`} />
            <span>SICKO MODE</span>
          </div>
          <span className='tempo'>05:12</span>
        </div>
      </div>
      {/* <Link to=''>
        Ver Mais
      </Link> */}
    </div>
    </>
  )
}

export default ArtistPage;
