import React, { Component } from 'react';
import MyGifs from './components/gifs.jsx'
import MySearchBar from './components/searchBar.jsx'
import MyGif from './components/gif.jsx'

import './style/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Joes Gifs</h1>
          <MySearchBar className="Search-bar"/>
        </header>
        <div className="Gifs">
          <MyGifs/>
        </div>
      </div>
    );
  }
}

export default App;
