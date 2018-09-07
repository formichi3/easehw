import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';



export default class MySearchBar extends React.Component {

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
      <MuiThemeProvider>
        <TextField
          id="search"
          placeholder="Search Gifs ..."
          type="search"
          margin="normal"
          autoFocus={true}
          onChange={this.handleChange}
          onKeyPress={this.onKeyPress}
          inputStyle={inputStyle}
          />
        </MuiThemeProvider>
      );
    }
  }
