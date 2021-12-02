import React from 'react';
import './Footer.css';
import Grid from '@mui/material/Grid/';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import Container from '@mui/material/Container';
import history from '../history';

const Footer2 = () => {
  return (
    <div className='site-footer'>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={10} md={6}>
            <div className='col'>
              <h6>About</h6>
              <p align='justify'>
                We proudly develop this web application project as a requirement
                for the Introduction to Software Engineering course at the
                University of Puerto Rico in Mayagüez. The developers extend an
                immense gratitude to our professor Marko Schütz-Schmuck and our
                TA, Alexander Rivera, for their willingness to help us build
                this awesome project.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <div className='col'>
              <h6>Company</h6>
              <ul className='footer-links'>
                <li>
                  <button onClick={() => history.push('/')}>Home</button>
                </li>
                <li>
                  <button onClick={() => history.push('/about-us')}>
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => history.push('/')}>My Account</button>
                </li>
                <li>
                  <button onClick={() => history.push('/')}>
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <h6>Contact Us</h6>
              <div>
                <PhoneEnabledIcon fontSize='inherit' /> &nbsp; +1-787-555-5555
              </div>
              <div>
                <EmailIcon fontSize='inherit' /> &nbsp; services@CarHub.com
              </div>
              <div className='col'>
                <ul className='social-icons'>
                  <li>
                    <button
                      className='facebook'
                      onClick={() => history.push('/')}>
                      <FacebookIcon />
                    </button>
                  </li>
                  <li>
                    <button
                      className='twitter'
                      onClick={() => history.push('/')}>
                      <TwitterIcon />
                    </button>
                  </li>
                  <li>
                    <button
                      className='instagram'
                      onClick={() => history.push('/')}>
                      <InstagramIcon />
                    </button>
                  </li>
                  <li>
                    <button
                      className='linkedin'
                      onClick={() => history.push('/')}>
                      <LinkedInIcon />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={3}>
          <Grid item xs>
            <div className='col'>
              <p className='copyright-text'>
                Copyright &copy; {new Date().getFullYear()} CarHub All Rights
                Reserved
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer2;
