import React from 'react'
import Atistas from './Artist';
const Principal = () => {
  return (
    <div className='main'>
        <h2>ARTISTAS POPULARES</h2>
        <div className='artistas-populares'>
          {/* Cada artista vira um componente ou card */}
          <Atistas />
        </div>
        <div>
          <h2>MÚSICAS DO MOMENTO</h2>
        </div>
    </div>
  )
}

export default Principal
