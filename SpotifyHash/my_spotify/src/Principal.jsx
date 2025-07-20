import React from 'react'
import Atistas from './Artist';
import Songs from './Songs.jsx'
import { BrowserRouter, Link } from 'react-router-dom';
const Principal = () => {
  return (
    <div className='main'>
        <div className='containerTitulos'>
          <h2>ARTISTAS POPULARES</h2>
          <Link to="/artists">
            Mostrar Todos
          </Link>
        </div>
        <div className='artistas-populares'>
          {/* Cada artista vira um componente ou card */}
          <Atistas />
        </div>
        <div className='containerTitulos'>
          <h2>MÚSICAS DO MOMENTO</h2>
          <Link to="/songs">
            Mostrar Todos
          </Link>
        </div>
        <div className='artistas-populares'>
            {/* Cada artista vira um componente ou card */}
            <Songs />
        </div>
    </div>
  )
}

export default Principal
