import React from 'react';
const LibrarySong = ({name,img,artist,song,songs,setCurrentsong,id }) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter(songs => songs.id === id)[0];
    console.log(selectedSong);
  }
  return (
    <div className="library-song" onClick={songSelectHandler}>
      <div className="song-description">
      <img src={img} alt={name + " App By Shahriar"} />
      <h3>{name}</h3>
      <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;