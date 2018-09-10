import React from 'react';
import axios from 'axios'
import styles from '../style/Gif.css'

import pinkHeart from '../img/heart.png'
import whiteHeart from '../img/whiteHeart.png'


export default class MyGif extends React.Component {

  constructor() {
    super();
    this.state = {
      favorite: false,
      src: whiteHeart
    }
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }
  // retrieve top trending gifs, # specified by numGifs in state
  componentWillMount(){

  }

  componentDidMount() {

  }

  componentsWillUnmount() {
  }

  toggleFavorite(){
    console.log(this.state.src);
    if (!this.state.favorite){
      this.setState({favorite: true, src: pinkHeart})
    } else {
      this.setState({favorite: false, src: whiteHeart})
    }
  }

  render() {
    return (
      <div className="parent">
          <img className="Gif" src={this.props.src} onClick={this.toggleFavorite} style={this.props.style}/>
          <div className="child"><img className="img-heart" src={this.state.src} onClick={this.toggleFavorite}/></div>
      </div>
      );
    }
  }
