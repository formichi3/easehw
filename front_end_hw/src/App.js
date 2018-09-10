import React, { Component } from 'react';
import MyGifs from './components/gifs.jsx'
import MySearchBar from './components/searchBar.jsx'
import MyNavBar from './components/navbar.jsx'
import MyGif from './components/gif.jsx'

import './style/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div clasName="navbar">
          <MyNavBar/>
        </div>
        <div className="gifs">
          <MyGifs/>
        </div>
      </div>
    );
  }
}

export default App;
