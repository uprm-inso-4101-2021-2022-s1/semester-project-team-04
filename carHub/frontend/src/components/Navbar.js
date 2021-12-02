import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import './Navbar.css';
import history from '../history';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <div className='navbar'>
        <nav className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <b>
              {click ? (
                <CloseIcon style={{ color: 'white' }} />
              ) : (
                <MenuIcon style={{ color: 'white' }} />
              )}
            </b>
          </div>
          <div onClick={(closeMobileMenu, () => history.push('/'))}>
            <img src={logo} className='navbar-logo' alt='Logo' />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <div
                className='nav-links'
                onClick={(closeMobileMenu, () => history.push('/'))}>
                Home
              </div>
            </li>
            <li
              className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}>
              <div
                className='nav-links'
                onClick={(closeMobileMenu, () => history.push('/'))}>
                Services
              </div>
              {dropdown && <Dropdown />}
            </li>
            <li className='nav-item'>
              <div
                className='nav-links'
                onClick={(closeMobileMenu, () => history.push('/about-us'))}>
                About Us
              </div>
            </li>

            <li>
              <Link
                className='nav-links-mobile'
                onClick={(closeMobileMenu, () => history.push('/Sign-in'))}>
                Login
              </Link>
            </li>
          </ul>
          {button && (
            <Button
              buttonStyle='btn--outline'
              onClick={() => history.push('/Sign-in')}>
              Login
            </Button>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
