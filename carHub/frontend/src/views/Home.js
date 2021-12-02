import React from 'react';
import Slider from '../components/Carousel';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Slider />
    </>
  );
};

export default Home;
