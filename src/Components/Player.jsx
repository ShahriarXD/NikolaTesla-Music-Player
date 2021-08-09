import React, {useRef ,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle , faAngleRight,  faAngleLeft , faPause} from '@fortawesome/free-solid-svg-icons'



const Player = ({currentsong , isplaying , setIsplaying}) => {
  const audioRef = useRef(null);  // useRef to store the audio element
  const playSongHandler= () => {
    if (isplaying) {   // if the player is playing, pause it
      setIsplaying(false);
    audioRef.current.pause();  // pause the audio
    }else {
      setIsplaying(true);
    audioRef.current.play();  // play the audio
    }
  };
  const [songTime , setSingTime] = useState({
    currentTime : 0,
    duration : 0
  });
  const timeUpdateHandler = (e) => {
    const startTime = e.target.currentTime
    const endTime = e.target.duration;
    setSingTime({...songTime , currentTime : startTime , duration : endTime});
  }
   // time formating
  const getSongTime = (time) => {
    return (
      Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
    )
  }
  //Drag handeler
  const dragHandler = (e) => {
    setSingTime({...songTime , currentTime : e.target.value });
    audioRef.current.currentTime = e.target.value;
  }
  return (
    <div className="player">
      <div className="time-control">
        <p id ="start-time">{getSongTime(songTime.currentTime)}</p>
        <input 
        type="range" 
        min={0}
        max={songTime.duration}
        value={songTime.currentTime}
        onChange={dragHandler} />
        <p id ="end-time">{getSongTime(songTime.duration)}</p>
        </div>
        <div className="play-control">
          <FontAwesomeIcon className="previous" icon={faAngleLeft} size="2x"></FontAwesomeIcon>
          <FontAwesomeIcon className="play" icon={isplaying ? faPause : faPlayCircle} size="2x" onClick={playSongHandler}></FontAwesomeIcon>
          <FontAwesomeIcon className="forward" icon={faAngleRight} size="2x"></FontAwesomeIcon>
        </div>
        <div>
          <audio 
          onTimeUpdate={timeUpdateHandler} 
          onLoadedMetadata={timeUpdateHandler}
          src={currentsong.mp3} 
          ref={audioRef}></audio>
        </div>
    </div>
  );
};

export default Player;