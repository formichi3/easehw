import React, { Component } from 'react';
import logo from './logo.svg';
import MyTable from './components/table.jsx'
import MyGifs from './components/gif.jsx'
import MySearchBar from './components/searchBar.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Joes Gifs</h1>
          <MySearchBar className="Search-bar"/>
        </header>
        <MyGifs/>
      </div>
    );
  }
}

export default App;
