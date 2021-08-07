import React from 'react';
import './Styles/App.scss';
import Songs from './Components/Songs';
import Player from './Components/Player';

function App() {
  return (
    <div className="container">
      <h1 id="sexy">Music Player By Nikola Tesla.</h1>
      <Songs></Songs>
      <Player></Player>
      </div>
  );
}

export default App;
