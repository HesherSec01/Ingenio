import React from 'react';
import '../../css/App.css';
import { Button } from '../buttons/Button';
import './portada.css';

function Portada() {
  return (
    <div className='hero-container'>
      <video src='/videos/video.mp4' autoPlay loop muted />
      <h1>Lugares Turisticos</h1>
      <p>¿Que estas esperando?</p>
      <div className='hero-btns'>
       
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          EMPEZAR <i className='fas fa-hiking' />
        </Button>
      </div>
    </div>
  );
}

export default Portada;
