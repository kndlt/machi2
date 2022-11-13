import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sprite from './Sprite';
import Boy from './Boy';

function App() {
  const objs: any[] = [];



  return (
    <div className="App">
      <Haikei />
      
      <Boy style={{
        position: "absolute",
        bottom:200,
        left: 200
      }} />
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
      backgroundColor: "#8cd2fa"
    }}></div>
  )
}

export default App;
