import React from 'react';
import Dialog from './dialog'
import '../style/Gif.css'


export default class MyGif extends React.Component {

  constructor() {
    super();
    this.state = {
      dialogOpen: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);

  }

  handleClick(e){
    this.setState({dialogOpen: true})
    this.props.makeFavorite(e.target.src, e.target.id)
  }

  handleDialogClose(){
    console.log('Closing dialog');
    this.setState({dialogOpen: false})
  }


  render() {
    return (
      <div className="parent">
          <Dialog dialogOpen={this.state.dialogOpen} handleDialogClose={this.handleDialogClose}/>
          <img className="Gif" src={this.props.src} onClick={this.handleClick} style={this.props.style} alt={""} id={this.props.id}/>
      </div>
      );
    }
  }
