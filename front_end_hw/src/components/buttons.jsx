import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class MyButtons extends React.Component {

  constructor() {
    super();
    this.state = {
      topSelected: true,
    }
    this.switchToTop = this.switchToTop.bind(this);
    this.switchToRandom = this.switchToRandom.bind(this);
  }

  componentWillMount(){
  }

  switchToRandom() {
      this.props.getSearchTerm("secretRandomSearchTerm")
      this.setState({topSelected: false});
  }

  switchToTop() {
    if(!this.state.topSelected){
      this.props.getSearchTerm("")
      this.setState({topSelected: true});
    }
  }


  render() {
    return (
      <MuiThemeProvider>
        <div style={{position: 'relative', marginTop: "10px"}}>
          <RaisedButton
            label={"Top"}
            onClick={this.switchToTop}
            primary={this.state.topSelected}
          />
          <RaisedButton
            label={"Random"}
            onClick={this.switchToRandom}
            primary={!this.state.topSelected}
          />
        </div>
      </MuiThemeProvider>
      );
  }
}
