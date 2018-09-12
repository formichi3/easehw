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

  // shouldComponentUpdate(nextProps, nextState){
  //   // if (this.state.searchTerm === nextState.searchTerm){
  //   //   return false;
  //   // } else {
  //   //   return true;
  //   // }
  // }

  getSearchTerm = (searchTerm) => {
    this.setState({searchTerm: searchTerm})
  }

  makeFavorite = (gif, key) => {
    if (!this.state.favorites[key]){
      var newFavorites = this.state.favorites
      var newUrls = this.state.urls
      newFavorites[key] = gif
      newUrls.push(gif)
      this.setState({urls: newUrls, favorites: newFavorites}, () => {
        console.log("Favorites: ", this.state.urls);
      })
    }
  }



  render() {
    return (
      <div className="App">
        <div className="navbar">
          <MyNavBar callBack={this.getSearchTerm} favorites={this.state.urls}/>
        </div>
        <div className="gifs">
          <MyGifs searchTerm={this.state.searchTerm} makeFavorite={this.makeFavorite} favorites={this.state.urls}/>
        </div>
      </div>
    );
  }
}

export default App;
