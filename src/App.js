import React, { Component } from 'react';
import './App.css';
import Body from './Body';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <Body />

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
         <RaisedButton num={this.state.num} />
        <FlatButton /> 
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div id="bg"></div>
      </div>
    );
  }
}

export default App;
