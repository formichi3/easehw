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
  }

  //check if there are any favorites stored locally
  componentDidMount() {
    if(localStorage.urls){
      var storedFavorites = JSON.parse(localStorage.getItem("urls"));
      if (storedFavorites.length > 0){
        this.setState({urls: storedFavorites});
      }
    }
  }

  //retrieve search term from search bar for MyGifs components
  getSearchTerm = (searchTerm) => {
    console.log("search term: ", searchTerm);
    this.setState({searchTerm: searchTerm, gifDisplay: 'flex', errorDisplay: 'none'})
  }

  //called when an image is clicked on the screen
  makeFavorite = (gif, key, arrPos) => {
    var newFavorites = this.state.favorites
    var newKeys = this.state.keys
    var newUrls = this.state.urls
    //if the gif isn't already a favorite, and it's not being clicked from the favorites column
    if (!this.state.favorites[key] && key !== -1){
      newFavorites[key] = gif
      newUrls.push(gif)
      newKeys.push(key)
      this.setState({urls: newUrls, favorites: newFavorites}, () => {
        localStorage.setItem("urls", JSON.stringify(this.state.urls));
      })
    }
    //key=-1 indicates the gif was clicked from the favorites column
    else if (key === -1){
      var index = newUrls.indexOf(gif);
      if (index !== -1){
        newUrls.splice(index, 1);
        delete newFavorites[newKeys[index]];
        newKeys.splice(index, 1);
      }
      this.setState({urls: newUrls, favorites: newFavorites, keys: newKeys}, () => {
        localStorage.setItem("urls", JSON.stringify(this.state.urls));
      })
    }
  }

  //hide gifs div and display Kanye shrugging his shoulders
  showErrorScreen() {
      this.setState({gifDisplay: 'none', errorDisplay: 'flex'})
  }



  render() {
    return (
      <div className="App">
        <div className="navbar">
          <MyNavBar callBack={this.getSearchTerm} urls={this.state.urls} unfavorite={this.makeFavorite}/>
        </div>
        <div className="gifs" style={{display: this.state.gifDisplay}} >
          <MyGifs searchTerm={this.state.searchTerm} makeFavorite={this.makeFavorite} showErrorScreen={this.showErrorScreen}/>
        </div>
        <div className="error-screen" style={{display: this.state.errorDisplay}}>
          <h1>Oops!... Try searching something else</h1>
          <img className='error-gif' alt='error-gif' src='https://media.giphy.com/media/14tvbepZ8vhU40/giphy.gif'></img>
        </div>
      </div>
    );
  }
}

export default App;
