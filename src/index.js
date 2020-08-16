import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HashRouter as Router } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#de119025"
      // main: '#ffccbc20',
      // light: '#ffffee',
      // dark: '#cb9b8c',
      // contrastText: '#fff'
    },
    secondary: {
      main: '#000000',
      // light: '#efdcd5',
      // dark: '#8c7b75',
      contrastText: '#fff'
      // main: '#bcefff'
    },
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
