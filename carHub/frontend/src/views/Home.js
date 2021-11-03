import React from 'react';
import './Home.css';
import history from '../history';
import NavBut from '../components/NavButtons.js';
import SearchBar from '../components/SearchBar';
import backgroundImage from '../decoratives/textures/HomePageBackground.jpg';
import { fadeInDown, fadeInRight, zoomIn } from '../../node_modules/react-animations';
import Radium, { StyleRoot } from '../../node_modules/radium';
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
            <NavBut text='Home' disabled={true} />

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

        {/*Welcome to Carhub text*/}
        <StyleRoot>
          <div className='Welcome' style={styles.fadeInDown}>
            Welcome to CarHub
          </div>
        </StyleRoot>

        <div className='wrapper'>
          <Card img="https://source.unsplash.com/featured/?cars"
          title='Penis Car' description='Car for your penis' price=
          "You can't afford it" />

          <Card img="https://source.unsplash.com/featured/?cars"
          title='Penis Car' description='Car for your penis' price=
          "20.00" />

          <Card img="https://source.unsplash.com/featured/?cars"
          title='Penis Car' description='Car for your penis' price=
          "500.00" />

          <Card img="https://source.unsplash.com/featured/?cars"
          title='Penis Car' description='Car for your penis' price=
          "1000.00" />

          <Card img="https://source.unsplash.com/featured/?cars"
          title='Penis Car' description='Car for your penis' price=
          "50,000.00" />

          <Card img="https://source.unsplash.com/featured/?cars"
          title='Penis Car' description='Car for your penis' price=
          "You can't afford it" />

          <Card img="https://source.unsplash.com/featured/?cars"
          title='Penis Car' description='Car for your penis' price=
          "20.00" />

          <Card img="https://source.unsplash.com/featured/?cars"
          title='Penis Car' description='Car for your penis' price=
          "500.00" />

          <Card img="https://source.unsplash.com/featured/?cars"
          title='Penis Car' description='Car for your penis' price=
          "1000.00" />

          <Card img="https://source.unsplash.com/featured/?cars"
          title='Penis Car' description='Car for your penis' price=
          "50,000.00" />
        </div>
      </div>
    );
  }
}

function BackgroundImage() {
  return <img src={backgroundImage} className='BckImg' />;
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
