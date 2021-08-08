import React, {useRef ,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle , faAngleRight,  faAngleLeft} from '@fortawesome/free-solid-svg-icons'



const Player = ({currentsong , isplaying , setIsplaying}) => {
  const audioRef = useRef(null);
  const playSongHandler= () => {
    if (isplaying) {
      setIsplaying(false);
    audioRef.current.pause();
    }else {
      setIsplaying(true);
    audioRef.current.play();
    }
  };
  const [songTime , setSingTime] = useState({
    currentTime : null,
    duration : null
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
  return (
    <div className="player">
      <div className="time-control">
        <p id ="start-time">{getSongTime(songTime.currentTime)}</p>
        <input type="range" name="" id="" />
        <p id ="end-time">{getSongTime(songTime.duration)}</p>
        </div>
        <div className="play-control">
          <FontAwesomeIcon className="previous" icon={faAngleLeft} size="2x"></FontAwesomeIcon>
          <FontAwesomeIcon className="play" icon={faPlayCircle} size="2x" onClick={playSongHandler}></FontAwesomeIcon>
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