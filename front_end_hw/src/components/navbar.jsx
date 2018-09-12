import React from 'react';
import MySearchBar from './searchBar'
import MyGif from './gif'

import '../style/Navbar.css'

export default class MyNavBar extends React.Component {

  constructor() {
    super();
    this.state = {
      text: '',
      favorites: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
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
    this.setState({favorites: nextProps.favorites.reverse()})
    console.log("navbar got new props: ", nextProps);
  }

  render() {
    return (
      <header className="navbar">
        <h1 className="title">Welcome to Joes Gifs</h1>
        <MySearchBar className="searchBar" focus={true} callBack={this.props.callBack}/>
        <h1 className="favorites-title">Favorites</h1>
        <div className="favorites">
          {
          this.state.favorites.map( (url, index) => (
              <img className="favorite-gif" src={url} key={index}></img>
          ))}
        </div>
      </header>
    )
    }
  }
