import React from 'react';
import './orders.css';
import CardItem from './CardItems';
import img1 from '../../images/img2.jpg'
import img2 from '../../images/img5.jpg'
import img3 from '../../images/img6.jpg'
import img4 from '../../images/img7.jpg'
import img5 from '../../images/img8.jpg'


function Cards() {
  return (
    <div className='cards'>
      {/* <h1>Check out these EPIC Destinations!</h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= {img1}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/'
            />
            <CardItem
            src= {img2}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
            src= {img3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/'
            />
            <CardItem
            src= {img4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/'
            />
            <CardItem
            src= {img5}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;