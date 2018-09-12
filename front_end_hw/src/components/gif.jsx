import React from 'react';

import pinkHeart from '../img/heart.png'
import whiteHeart from '../img/whiteHeart.png'

import '../style/Gif.css'


export default class MyGif extends React.Component {

  constructor() {
    super();
    this.state = {
      favorite: false,
      src: whiteHeart
    }
    this.handleClick = this.handleClick.bind(this);
  }
  // retrieve top trending gifs, # specified by numGifs in state
  componentWillMount(){

  }

  componentDidMount() {

  }

  componentsWillUnmount() {
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
