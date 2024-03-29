import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sprite from './Sprite';
import Boy from './Boy';
import { KaiProvider } from './KaiProvider';

function App() {

  return (
    <div className="App">
      <KaiProvider>
        <Haikei />
        
        <Boy style={{
          position: "absolute",
        }} />
        <input></input>
      </KaiProvider>
    </div>
  );
}

function Haikei () {
  return (
    <div style={{
      position: "absolute",
      top:0,
      left:0,
      right:0,
      bottom:0,
      zIndex: -1,
      backgroundColor: "#8cd2fa"
    }}></div>
  )
}

export default App;
