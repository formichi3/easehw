import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MySearchBar from './searchBar'
import TextField from 'material-ui/TextField';
import styles from '../style/Navbar.css'



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
  }

  handleChange(event) {
    this.setState({text: event.target.value})
  };

  onKeyPress(event) {
    if (event.key === "Enter"){
      console.log("Searching!");
    }
  }

  render() {
    const inputStyle = {
      autoFocus: true,
      hintText: "search gifs...",
      color: "white"
    }
    return (
      <header className="navbar">
        <h1 className="title">Welcome to Joes Gifs</h1>
        <MySearchBar className="searchBar" focus={true}/>
      </header>
    )
    }
  }
