import React , {useState} from 'react';
import './Styles/App.scss';
import Songs from './Components/Songs';
import Player from './Components/Player';
import Data from './Components/data.json'


function App() {
  const [song , setSong] = React.useState(Data)  //Full Data Access 
  const [currentsong , setCurrentsong] = React.useState(song[0])// We are setting the first song as the current song
  const [isplaying , setIsplaying] = React.useState(false) // 
  return (
    <div className="container">
      <h1 id="sexy">Music Player By Nikola Tesla.</h1>
      <Songs currentsong={currentsong}></Songs>
      <Player currentsong={currentsong} isplaying={isplaying} setIsplaying={setIsplaying}></Player>
      </div>
  );
}

export default App;
