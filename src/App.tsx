import React from 'react';
import './App.css';
import LogoPng from './logo.png'

function Logo() {
  console.log(LogoPng)
  return (
    <img src={LogoPng} alt="Logo" className='LoadingLogo'/>
  );
}

function Loading() {
  return (
    <div className='Loading'>
      <Logo/>
      <span className="loader"/>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Loading/>
    </div>
  );
}

export default App;
