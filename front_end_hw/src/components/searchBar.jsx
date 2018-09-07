import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';



export default class MySearchBar extends React.Component {

  constructor() {
    super();
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
  }

  handleChange() {
    console.log("Button clicked");
  };



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
          onChange={this.handleChange()}
          inputStyle={inputStyle}
          />
        </MuiThemeProvider>
      );
    }
  }
