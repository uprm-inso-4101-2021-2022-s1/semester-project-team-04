import React from 'react';
import Carousel from 'react-elastic-carousel';
import CardItem from './CardItem';
import store1 from '../img/pepboys.png';
import store2 from '../img/MarkoStore.png';
import store3 from '../img/advanceauto.jpg';

import './Carousel.css';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  //   { width: 1200, itemsToShow: 4 },
];

function Slider() {
  return (
    <>
      <div className='carousel'>
        <div className='carousel__container'>
          <div className='slider'>
            <Carousel breakPoints={breakPoints}>
              <CardItem
                src={store1}
                text='Pep Boys Auto Parts'
                label='Mayagüez, PR'
                path='/'
              />
              <CardItem
                src={store2}
                text='Marko Auto Parts'
                label='Mayagüez, PR'
                path='/'
              />
              <CardItem
                src={store3}
                text='Advance Auto Parts'
                label='Mayagüez, PR'
                path='/'
              />
              <CardItem
                src={store1}
                text='Pep Boys Auto Parts'
                label='Mayagüez, PR'
                path='/'
              />
              <CardItem
                src={store2}
                text='Marko Auto Parts'
                label='Mayagüez, PR'
                path='/'
              />
              <CardItem
                src={store3}
                text='Advance Auto Parts'
                label='Mayagüez, PR'
                path='/'
              />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
