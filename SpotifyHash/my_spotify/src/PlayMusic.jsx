import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faBackwardStep, faForwardStep, faCirclePause, faArrowRotateLeft, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { songsFromArtist } from './assets/songs.js';

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

  const { id } = useParams();
  const idNumber = Number(id);
  const song = Object.values(songsFromArtist).flat().find((s) => s.id === idNumber) || null;

  useEffect(() => {
    if (!("mediaSession" in navigator) || !song) return;

    const getImageType = (url) => {
      if (url.endsWith('.png')) return 'image/png';
      if (url.endsWith('.webp')) return 'image/webp';
      if(url.endsWith('.jfif')) return 'image/jfif';
      if(url.endsWith('.jpeg')) return 'image/jpeg';
      if(url.endsWith('.jpg')) return 'image/jpg';
    };

    navigator.mediaSession.metadata = new MediaMetadata({
    title: song.title,
    artist: song.artist,
    artwork: [
      { src: song.img, sizes: "512x512", type: getImageType(song.img) }
    ]
    });
  });

  return (
    <>
      <div className='main'>
        <div className='ImgCenter'>
          <img src={song.img} alt="Imagem do Artista" />
        </div>
      </div>
      <div className='Player'>
          <div className="PlayerImg">
            <Link to={`/song/${id}`}>
              <img src={song.img} alt="Imagem do Artista" />
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
            <p>{song.title}</p>
            <p>{song.artist}</p>
          </div>
          <audio src={song.audio} 
          ref={audioPlayer} controls loop 
          style={{display: 'none'}} 
          onLoadedMetadata={() => setDuration(audioPlayer.current.duration)} 
          onTimeUpdate={() => setCurrentTime(audioPlayer.current.currentTime)}></audio>
      </div>
    </>
  )
}

export default PlayMusic
