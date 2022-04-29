import React from 'react'
import './App.css';
import { useMousePosition } from './useMousePosition';

function App() {
  const position = useMousePosition()
  const secondPos = (position.x - position.y)/255
  const thirdPos = 255/(position.x - position.y)/255
  const appstyle = {
    //background: `#${position.x}000`,
    background: `linear-gradient(90deg, rgba(${position.y},${secondPos},${thirdPos},1) 0%, rgba(${position.x},${position.y},${thirdPos},1) 100%)`,
    height: '100vh',
    transition: 'all .5s ease'
  }

  const pstyle = {
    fontSize: `${secondPos}em`
  }

  return (
    <div style={appstyle} className="App">
      <h1>Cursor Positions</h1>
      <p style={pstyle}><strong>X:</strong> {position.x}</p>
      <p style={pstyle}><strong>Y:</strong> {position.y}</p>
      <p>{secondPos}</p>
      <p>{thirdPos}</p>
    </div>
  );
}

export default App;
