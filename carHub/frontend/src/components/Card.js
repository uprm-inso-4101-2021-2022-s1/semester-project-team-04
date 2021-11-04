import React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    return (
      <div className='card'>
        <img src={this.props.img} className='card__img' alt={this.props.alt}/>
        <div className='card__body'>
          <h2 className='card__title'> {this.props.title} </h2>
          <p className='card__description'> {this.props.description}</p>
          <h3 className='card__price'> {this.props.price} </h3>
          <button className='card__btn'> Add to WatchList </button>
        </div>
      </div>
    )
  }
}

export default Card;
