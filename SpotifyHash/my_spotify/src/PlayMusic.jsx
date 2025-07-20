import React from 'react'
import ShawMendes1 from './assets/songs/ShawMendes/Theres_Nothing_Holdin_Me-Back.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faBackwardStep, faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const PlayMusic = () => {
  return (
    <>
      <div className='main'>
        <div className='ImgCenter'>
          <img src={ShawMendes1} alt="Imagem do Artista" />
        </div>
      </div>
      <div className='Player'>
          <div className="PlayerImg">
            <Link to='/home'>
              <img src={ShawMendes1} alt="Imagem do Artista" />
            </Link>
          </div>
          <div className="ContainerColuna">
            <div className='PlayerBtn'>
                <FontAwesomeIcon icon={faBackwardStep} className='btn'/>
                <FontAwesomeIcon icon={faCirclePlay} className='btn'/>
                <FontAwesomeIcon icon={faForwardStep} className='btn'/>
            </div>
            <div className='PlayerMusicBar'>
              <span>00:00</span>
              <div className='progress'></div>
              <span>00:00</span>
            </div>
          </div>
          <div className="informacoes">
            <p>There's Nothing Holding'Me Back</p>
            <p>Shaw Mendes</p>
          </div>
      </div>
    </>
  )
}

export default PlayMusic
