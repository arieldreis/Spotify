import React, { useState } from 'react'
import ShawMendes1 from './assets/songs/ShawMendes/Theres_Nothing_Holdin_Me-Back.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faBackwardStep, faForwardStep, faCirclePause, faArrowRotateLeft, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import songTeste from './assets/songs/ShawMendes/AUDIO/audioOne.mp3';
import { useRef, useEffect } from 'react';

const PlayMusic = () => {
  const audioPlayer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
  }
  const FormatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  useEffect(() => {});
  return (
    <>
      <div className='main'>
        <div className='ImgCenter'>
          <img src={ShawMendes1} alt="Imagem do Artista" />
        </div>
      </div>
      <div className='Player'>
          <div className="PlayerImg">
            <Link to='/'>
              <img src={ShawMendes1} alt="Imagem do Artista" />
            </Link>
          </div>
          <div className="ContainerColuna">
            <div className='PlayerBtn'>
                <FontAwesomeIcon icon={faBackwardStep} className='btn'/>
                <FontAwesomeIcon icon={faArrowRotateLeft} className='btn' onClick={() => audioPlayer.current.currentTime -= 10}/>
                <FontAwesomeIcon icon={isPlaying ? faCirclePause : faCirclePlay} className='btn' onClick={() => playPause()}/>
                <FontAwesomeIcon icon={faArrowRotateRight} className='btn' onClick={() => audioPlayer.current.currentTime += 10}/>
                <FontAwesomeIcon icon={faForwardStep} className='btn'/>
            </div>
            <div className='PlayerMusicBar'>
              <span>{FormatTime(currentTime)}</span>
              <div className='progress'>
                <div className='progress__bar' style={{
                  backgroundColor: 'white',
                  height: '15px',
                  width: `${(currentTime / duration) * 100}%`,
                  borderRadius : '20px'
                }}></div>
              </div>
              <span>{FormatTime(duration)}</span>
            </div>
          </div>
          <div className="informacoes">
            <p>There's Nothing Holding'Me Back</p>
            <p>Shaw Mendes</p>
          </div>
          <audio src={songTeste} ref={audioPlayer} controls style={{display: 'none'}} onLoadedMetadata={() => setDuration(audioPlayer.current.duration)} onTimeUpdate={() => setCurrentTime(audioPlayer.current.currentTime)}></audio>
      </div>
    </>
  )
}

export default PlayMusic
