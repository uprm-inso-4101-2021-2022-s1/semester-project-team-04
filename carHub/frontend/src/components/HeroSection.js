import React from 'react';
import '../App.css';
import './HeroSection.css';
import background from '../img/HomePageBackground.jpg';
import SearchBar from '../components/SearchBar';
import { fadeInDown, fadeInRight, zoomIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={background} className='background' alt='car' />
      <StyleRoot>
        <div style={styles.zoomIn}>
          <SearchBar />
        </div>
      </StyleRoot>
    </div>
  );
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

export default HeroSection;
