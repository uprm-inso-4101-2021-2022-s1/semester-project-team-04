import React from 'react';
import styl from './NavButtons.css';
import Button from '@mui/material/Button/';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//Creates new theme for @mui buttons
const theme = createTheme({
  typography: {
    fontFamily: 'Josefin Sans, cursive',
  },
  palette: {
    primary: {
      light: '#F1FFFA',
      main: '#f3fffb',
      dark: '#a8b2af',
    },
    secondary: {
      light: '#6a6a6a',
      dark: '#303030',
      main: '#454545',
    },
  },
});

class NavButtons extends React.Component {
  render() {
    if (this.props.disabled) {
      return (
        //General Disabled Button
        <ThemeProvider theme={theme}>
          <Button
            onClick={this.props.onClick}
            className={styl.navButton}
            variant='text'
            size='small'
            color='secondary'
            disabled>
            {this.props.text}
          </Button>
        </ThemeProvider>
      );
    } else {
      return (
        //General Button
        <ThemeProvider theme={theme}>
          <Button
            onClick={this.props.onClick}
            className={styl.navButton}
            variant='text'
            size='small'
            color='primary'>
            {this.props.text}
          </Button>
        </ThemeProvider>
      );
    }
  }
}

export default NavButtons;
