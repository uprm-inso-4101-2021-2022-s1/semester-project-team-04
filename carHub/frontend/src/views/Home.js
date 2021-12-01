import React from 'react';
import './Home.css';
import history from '../history';
import NavBut from '../components/NavButtons.js';
import SearchBar from '../components/SearchBar';
import backgroundImage from '../img/HomePageBackground.jpg';
import { fadeInDown, fadeInRight, zoomIn} from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Card from '../components/Card.js';

class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        {/*Home page background image*/}
        <BackgroundImage />

        {/*Navigation Bar*/}
        <StyleRoot>
          <div className='navBar' style={styles.fadeInRight}>
            {/*Home*/}
            <NavBut
              onClick={() => history.push('/')}
              text='Home'
              disabled={false}
            />

            {/*About us*/}
            <NavBut
              onClick={() => history.push('/about-us')}
              text='About Us'
              disabled={false}
            />

            {/*Contact us*/}
            <NavBut
              onClick={() => history.push('/contact-us')}
              text='Contact Us'
              disabled={false}
            />

            {/*Login/Register*/}
            <NavBut
              onClick={() => history.push('/Sign-in')}
              text='Login/Register'
              disabled={false}
            />
          </div>
        </StyleRoot>

        {/*Search Bar*/}
        <StyleRoot>
          <div className='SearchBar' style={styles.zoomIn}>
            <SearchBar />
          </div>
        </StyleRoot>

        <div className='wrapper'>
          <Card
            img='https://source.unsplash.com/featured/?cars'
            title='Car'
            description='Worn tin but internals work.'
            price="3,500.00"
          />

          <Card
            img='https://source.unsplash.com/featured/?cars'
            title='Car'
            description='Does not have air conditioning'
            price='2,000.00'
          />

          <Card
            img='https://source.unsplash.com/featured/?cars'
            title='Car'
            description='Little mileage'
            price='50,000.00'
          />

          <Card
            img='https://source.unsplash.com/featured/?cars'
            title='Car'
            description='Worn tin but internals work.'
            price='7,500.00'
          />

          <Card
            img='https://source.unsplash.com/featured/?cars'
            title='Car'
            description='Does not have air conditioning'
            price='50,000.00'
          />

          <Card
            img='https://source.unsplash.com/featured/?cars'
            title='Car'
            description='Little mileage'
            price="15,000"
          />

          <Card
            img='https://source.unsplash.com/featured/?cars'
            title='Car'
            description='Worn tin but internals work.'
            price='20,000.00'
          />

          <Card
            img='https://source.unsplash.com/featured/?cars'
            title='Car'
            description='Does not have air conditioning'
            price='5,000.00'
          />

          <Card
            img='https://source.unsplash.com/featured/?cars'
            title='Car'
            description='Worn tin but internals work.'
            price='10,000.00'
          />

          <Card
            img='https://source.unsplash.com/featured/?cars'
            title='Car'
            description='Little mileage'
            price='50,000.00'
          />
        </div>
      </div>
    );
  }
}

function BackgroundImage() {
  return <img src={backgroundImage} className='BckImg' alt='car' />;
}

const styles = {
  fadeInDown: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown'),
  },
  fadeInRight: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeInRight, 'fadeInRight'),
  },
  zoomIn: {
    animation: 'x 3s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn'),
  },
};

export default Home;
