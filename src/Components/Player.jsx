import React, {useRef} from 'react';
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
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" name="" id="" />
        <p>End Time</p>
        </div>
        <div className="play-control">
          <FontAwesomeIcon className="previous" icon={faAngleLeft} size="2x"></FontAwesomeIcon>
          <FontAwesomeIcon className="play" icon={faPlayCircle} size="2x" onClick={playSongHandler}></FontAwesomeIcon>
          <FontAwesomeIcon className="forward" icon={faAngleRight} size="2x"></FontAwesomeIcon>
        </div>
        <div>
          <audio src={currentsong.mp3} ref={audioRef}></audio>
        </div>
    </div>
  );
};

export default Player;