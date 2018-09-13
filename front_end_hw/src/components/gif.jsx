import React from 'react';
import '../style/Gif.css'


export default class MyGif extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.makeFavorite(e.target.src, e.target.id)
  }


  render() {
    return (
      <div className="parent">
          <img className="Gif" src={this.props.src} onClick={this.handleClick} style={this.props.style} alt={""} id={this.props.id}/>
      </div>
      );
    }
  }
