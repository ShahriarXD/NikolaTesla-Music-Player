import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle , faAngleRight,  faAngleLeft} from '@fortawesome/free-solid-svg-icons'


const Player = () => {
  return (
    <div className="player">
      <div className="time-controls">
        <p>Start Time : 00</p>
        <input type="range" name="" id="" />
        <p>End Time : 00</p>
        <div className="play-control">
          <FontAwesomeIcon className="previous" icon={faAngleLeft} size="2x"></FontAwesomeIcon>
          <FontAwesomeIcon className="play" icon={faPlayCircle} size="2x"></FontAwesomeIcon>
          <FontAwesomeIcon className="forward" icon={faAngleRight} size="2x"></FontAwesomeIcon>
        </div>
        </div>
    </div>
  );
};

export default Player;