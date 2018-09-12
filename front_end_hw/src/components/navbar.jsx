import React from 'react';
import MySearchBar from './searchBar'
import MyFavorites from './favorites'

import '../style/Navbar.css'

export default class MyNavBar extends React.Component {

  constructor() {
    super();
    this.state = {
      text: ''
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

  }

  render() {
    return (
      <header className="navbar">
        <h1 className="title">Welcome to Joes Gifs</h1>
        <MySearchBar className="searchBar" focus={true} callBack={this.props.callBack}/>
        <MyFavorites favorites={this.props.favorites}/>
      </header>
    )
    }
  }
