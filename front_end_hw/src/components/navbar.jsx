import React from 'react';
import MySearchBar from './searchBar'
import MyButtons from './buttons'
import MyGif from './gif'

import '../style/Navbar.css'

export default class MyNavBar extends React.Component {

  constructor() {
    super();
    this.state = {
      text: '',
      urls: [],
      favorites: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.handleUnfavorite = this.handleUnfavorite.bind(this);
  }

  componentWillMount(){
    console.log("props: ", this.props);
  }

  handleChange(event) {
    this.setState({text: event.target.value})
  };

  onKeyPress(event) {
    if (event.key === "Enter"){
      console.log("Searching!");
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({urls: nextProps.urls.reverse()})
    console.log("navbar got new props: ", nextProps);
  }

  handleUnfavorite(e) {
    console.log("asdf", e.target);
    this.props.unfavorite(e.target.src, -1, e.target.alt)
  }

  render() {
    return (
      <header className="navbar">
        <h1 className="title">Welcome to Joes Gifs</h1>
        <MySearchBar className="searchBar" focus={true} callBack={this.props.callBack}/>
        <MyButtons getSearchTerm={this.props.callBack}/>
        <h1 className="favorites-title">Favorites</h1>
        <div className="favorites">
          {
          this.state.urls.map( (url, index) => (
              <img className="favorite-gif" src={url} alt={index} key={index} onClick={this.handleUnfavorite}></img>
          ))}
        </div>
      </header>
    )
    }
  }
