import React, { Component } from 'react';
import logo from './logo.svg';
import MyTable from './components/table.jsx'
import MyGif from './components/gif.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App" style={{backgroundColor: '#222'}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Joe's Gifs</h1>
        </header>
        <MyGif/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
