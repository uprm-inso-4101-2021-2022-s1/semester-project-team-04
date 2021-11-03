import React, { Component } from 'react';
import './About_Us.css';
import blasP from '../decoratives/textures/Blas Portrait.jpg';
import raulP from '../decoratives/textures/Raul Portrait.jpg';
import westerP from '../decoratives/textures/Wester Portrait.jpg';




const Page = () => {
    return(
        <body >
        <div className="body-about">
        <div className="about-section">
            <div className="inner-container">
                <h3>
                    About Us...
                    <div class="border"></div>
                </h3>
                <p className="text">
                    This is a team composed by students of the University of
                    Puerto Rico Recinto de Mayaguez. This platform was idializaded
                    and coded for a semester-long project for our Intro to Software Engineering
                </p>
                <button>Read More</button>
            </div>
        </div>
        {/*Parallax change to our information cards*/}
        <section class="parallax">
            <div class="parallax-inner">
                <h1>Meet the Team <br/>And Its Supporters:</h1>
            </div>
        </section>
        <br/>
        {/*Our information cards*/}
        <section-C>
            <div className="team">
                <img src={blasP} alt="blasP"></img>
                <div className="info">
                    <div className="name">Blas A Ayala Garcia</div>
                    <div className="title">Developer of Back-End</div>
                </div>
            </div>

            <div class="team">
                <img src="https://image.shutterstock.com/image-illustration/very-big-size-man-without-260nw-126920099.jpg"></img>
                <div class="info">
                    <div class="name">Edgar J Sanabria Soto</div>
                    <div class="title">Developer of Front-End</div>
                </div>
            </div>
 
           <div class="team">
                <img src="https://image.shutterstock.com/image-illustration/very-big-size-man-without-260nw-126920099.jpg"></img>
                <div class="info">
                     <div class="name">Gabriel R Garcia Aviles</div>
                    <div class="title">Developer of Back-End</div>
                </div>
            </div>
 
            <div class="team">
                <img src="https://image.shutterstock.com/image-illustration/very-big-size-man-without-260nw-126920099.jpg"></img>
                <div class="info">
                    <div class="name">Rafael O Lopez Echevarria</div>
                    <div class="title">Developer of Back-End</div>
                </div>
            </div>
 
            <div class="team">
                <img src={raulP} alt="raulP"></img>
                <div class="info">
                    <div class="name">Raul A Rivera Rodriguez</div>
                    <div class="title">Developer of Front-End</div>
                </div>
            </div>
 
            <div class="team">
                <img src={westerP} alt="westerP"></img>
                <div class="info">
                    <div class="name">Wester J Aldarondo Torres</div>
                    <div class="title">Developer of front-End</div>
                </div>
            </div>
 
            <div class="team">
                <img src="https://image.shutterstock.com/image-illustration/very-big-size-man-without-260nw-126920099.jpg"></img>
                <div class="info">
                    <div class="name">Alexander Rivera De Jesús</div>
                    <div class="title">TA of the course</div>
                </div>
            </div>
 
            <div class="team">
                <img src="https://image.shutterstock.com/image-illustration/very-big-size-man-without-260nw-126920099.jpg"></img>
                <div class="info">
                    <div class="name">Marko Schütz-Schmuck</div>
                    <div class="title">Professor of the course</div>
                </div>
            </div>

        </section-C>
        </div>
    </body>
    )
}

export default Page;