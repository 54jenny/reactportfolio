import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';



class App extends Component {
  render() {
    return (
      <div className="App">
       <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
          
          </IconButton>
          <Typography variant="title" color="inherit" >
            Title
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started12s, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
