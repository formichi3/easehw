import React from 'react';
import MyGifs from './components/gifs.jsx'
import MyNavBar from './components/navbar.jsx'
import store from './store.js'

import './style/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      favorites: {},
      urls: [],
      keys:[],
      gifDisplay: 'flex',
      errorDisplay: 'none'
    }

    this.getSearchTerm = this.getSearchTerm.bind(this);
    this.makeFavorite = this.makeFavorite.bind(this);
    this.showErrorScreen = this.showErrorScreen.bind(this);
  }

  componentWillMount() {
    //localStorage.clear()
  }

  componentDidMount() {
    if(localStorage.urls){
      var storedFavorites = JSON.parse(localStorage.getItem("urls"));
      if (storedFavorites.length > 0){
        this.setState({urls: storedFavorites.reverse()}, () => {
          console.log("setting stored favs", this.state.urls);
        });
      }
    }
  }

  getSearchTerm = (searchTerm) => {
    console.log("search term: ", searchTerm);
    this.setState({searchTerm: searchTerm, gifDisplay: 'flex', errorDisplay: 'none'})
  }

  makeFavorite = (gif, key, arrPos) => {
    var newFavorites = this.state.favorites
    var newKeys = this.state.keys
    var newUrls = this.state.urls
    console.log(newFavorites, newUrls);
    if (!this.state.favorites[key] && key !== -1){
      newFavorites[key] = gif
      newUrls.push(gif)
      newKeys.push(key)
      console.log("keys: ", newKeys);
      this.setState({urls: newUrls, favorites: newFavorites}, () => {
        // console.log("Favorites: ", this.state.urls);
        localStorage.setItem("urls", JSON.stringify(this.state.urls));
      })
    } else if (key === -1){
      delete newFavorites.key;
      var index = newUrls.indexOf(gif);
      if (index !== -1){
        newUrls.splice(index, 1);
        delete newFavorites[newKeys[index]];
        console.log('keys before delete', newKeys);
        newKeys.splice(index, 1);
        console.log('keys after delete', newKeys);
      }
      this.setState({urls: newUrls, favorites: newFavorites, keys: newKeys}, () => {
        localStorage.setItem("urls", JSON.stringify(this.state.urls));
      })
    }
  }

  showErrorScreen() {
    console.log("In function show error screen");
      this.setState({gifDisplay: 'none', errorDisplay: 'flex'})
  }



  render() {
    return (
      <div className="App">
        <div className="navbar">
          <MyNavBar callBack={this.getSearchTerm} urls={this.state.urls} favorites={this.state.favorites} unfavorite={this.makeFavorite}/>
        </div>
        <div className="gifs" style={{display: this.state.gifDisplay}} >
          <MyGifs searchTerm={this.state.searchTerm} makeFavorite={this.makeFavorite} showErrorScreen={this.showErrorScreen}/>
        </div>
        <div className="error-screen" style={{display: this.state.errorDisplay}}>
          <h1>Oops!... Try searching something else</h1>
          <img className='error-gif' src='https://media.giphy.com/media/14tvbepZ8vhU40/giphy.gif'></img>
        </div>
      </div>
    );
  }
}

export default App;
