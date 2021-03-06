import React from 'react';
import './About_Us.css';
import blasP from '../img/Blas Portrait.jpg';
import raulP from '../img/Raul Portrait.jpg';
import westerP from '../img/Wester Portrait.jpg';
import Navbar from '../components/Navbar';

const AboutUs = () => {
  return (
    <body>
      <Navbar />
      <div className='body-about'>
        <div className='about-section'>
          <div className='inner-container'>
            <h3>
              About Us...
              <div class='border'></div>
            </h3>
            <p className='text'>
              This is a team composed by students of the University of Puerto
              Rico Mayaguez campus. This platform was idializaded and coded for
              a semester-long project for our Intro to Software Engineering
            </p>
            <button>Read More</button>
          </div>
        </div>
        {/*Parallax change to our information cards*/}
        <section class='parallax'>
          <div class='parallax-inner'>
            <h1>
              Meet the Team <br />
              And Its Supporters:
            </h1>
          </div>
        </section>
        <br />
        {/*Our information cards*/}
        <section-C>
          <div className='team'>
            <img src={blasP} alt='blasP' alt='developer'></img>
            <div className='info'>
              <div className='name'>Blas A Ayala Garcia</div>
              <div className='title'>Developer of Back-End</div>
            </div>
          </div>

          <div class='team'>
            <img
              src='https://image.shutterstock.com/image-illustration/very-big-size-man-without-260nw-126920099.jpg'
              alt=''></img>
            <div class='info'>
              <div class='name'>Edgar J Sanabria Soto</div>
              <div class='title'>Developer of Front-End</div>
            </div>
          </div>

          <div class='team'>
            <img
              src='https://image.shutterstock.com/image-illustration/very-big-size-man-without-260nw-126920099.jpg'
              alt=''></img>
            <div class='info'>
              <div class='name'>Gabriel R Garcia Aviles</div>
              <div class='title'>Developer of Back-End</div>
            </div>
          </div>

          <div class='team'>
            <img
              src='https://image.shutterstock.com/image-illustration/very-big-size-man-without-260nw-126920099.jpg'
              alt=''></img>
            <div class='info'>
              <div class='name'>Rafael O Lopez Echevarria</div>
              <div class='title'>Developer of Back-End</div>
            </div>
          </div>

          <div class='team'>
            <img src={raulP} alt='raulP' alt='developer'></img>
            <div class='info'>
              <div class='name'>Raul A Rivera Rodriguez</div>
              <div class='title'>Developer of Front-End</div>
            </div>
          </div>

          <div class='team'>
            <img src={westerP} alt='westerP' alt='developer'></img>
            <div class='info'>
              <div class='name'>Wester J Aldarondo Torres</div>
              <div class='title'>Developer of front-End</div>
            </div>
          </div>

          <div class='team'>
            <img
              src='https://image.shutterstock.com/image-illustration/very-big-size-man-without-260nw-126920099.jpg'
              alt=''></img>
            <div class='info'>
              <div class='name'>Alexander Rivera De Jes??s</div>
              <div class='title'>TA of the course</div>
            </div>
          </div>

          <div class='team'>
            <img
              src='https://image.shutterstock.com/image-illustration/very-big-size-man-without-260nw-126920099.jpg'
              alt=''></img>
            <div class='info'>
              <div class='name'>Marko Sch??tz-Schmuck</div>
              <div class='title'>Professor of the course</div>
            </div>
          </div>
        </section-C>
      </div>
    </body>
  );
};

export default AboutUs;
