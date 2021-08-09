import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({songs , setCurrentsong}) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
      {
        songs.map((song) => 
        (  <LibrarySong 
          song = {song} // single song elemnet
          songs = {songs} // eikane songs ke filter korte hobe no single song
          key = {song.id}
          id = {song.id}
          img = {song.img}
          artist = {song.Artist}
          name = {song.Name}
          setCurrentsong = {setCurrentsong}
          ></LibrarySong>
          ))}
        </div>
      </div>
  );
};

export default Library;