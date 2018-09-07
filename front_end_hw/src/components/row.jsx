import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class MyRow extends React.Component {

  constructor() {
    super();
    this.state = {

    }
  }

  handleClick() {
    console.log("Button clicked");
  };


  render() {
    return (
      <MuiThemeProvider>
        <RaisedButton
          label={this.props.label}
          onClick={this.props.onClick}
          primary={this.state.primary}
          secondary={this.state.secondary}
          disabled={this.state.disabled}
          style = {this.props.style}
        />
      </MuiThemeProvider>
      );
  }
}
