import React from 'react';

const Songs = ({currentsong}) => {
  return (
    <div className="song-container">
      <img src={currentsong.img} alt={currentsong.Name + " App By Shahriar"} />
      <h1>{currentsong.Name}</h1>
      <p>{currentsong.Artist}</p>
    </div>
  );
};

export default Songs;