import React from 'react';
import MyGifs from './components/gifs.jsx'
import MyNavBar from './components/navbar.jsx'

import './style/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      favorites: {},
      urls: []
    }

    this.getSearchTerm = this.getSearchTerm.bind(this);
    this.makeFavorite = this.makeFavorite.bind(this);
  }

  shouldComponentUpdate(nextState){
    // if (Object.keys(this.state.favorites).length !== Object.keys(nextState.favorites).length){
    //   return false;
    // } else {
    //   return true;
    // }
    if (this.state.searchTerm === nextState.searchTerm){
      return false;
    } else {
      return true;
    }
  }

  getSearchTerm = (searchTerm) => {
    this.setState({searchTerm: searchTerm})
  }

  makeFavorite = (gif, key) => {
    if (!this.state.favorites[key]){
      var newFavorites = this.state.favorites
      newFavorites[key] = gif
      console.log(newFavorites);
    }
  }



  render() {
    return (
      <div className="App">
        <div className="navbar">
          <MyNavBar callBack={this.getSearchTerm} favorites={this.state.favorites}/>
        </div>
        <div className="gifs">
          <MyGifs searchTerm={this.state.searchTerm} makeFavorite={this.makeFavorite}/>
        </div>
      </div>
    );
  }
}

export default App;
