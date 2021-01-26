import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img9 from '../../images/img-9.jpg';
import img3 from '../../images/img-3.jpg';
import img4 from '../../images/img-4.jpg';
import img8 from '../../images/img-8.jpg';
import img7 from '../../images/img-7.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>¡Mira estos destinos EPICOs!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img9}
              text='Explora Ingenio y sus increibles criaderos de truchas'
              label='Aventura'
              path='/services'
            />
            <CardItem
              src={img3}
              text='Viaja a traves de botes por nuestras piscigranjas'
              label='Botes'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img4}
              text='Visite nuestros recreos y pruebe nuestros delisiosos platillos'
              label='Gastronomia'
              path='/services'
            />
            <CardItem
              src={img7}
              text='Experimente la caminata en la cima de las montañas'
              label='Aventura'
              path='/products'
            />
            <CardItem
              src={img8}
              text='Paseo en bus por nuestro querido Ingenio'
              label='Adrenalina'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
