import React, { Component } from 'react';
import MyGifs from './components/gif.jsx'
import MySearchBar from './components/searchBar.jsx'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Joe's Gifs</h1>
          <MySearchBar className="Search-bar"/>
        </header>
        <div className="Gifs">
          <MyGifs className="Gifs"/>
        </div>
      </div>
    );
  }
}

export default App;
