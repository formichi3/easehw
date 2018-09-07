import React from 'react';
import axios from 'axios'
import styles from '../style/Gif.css'


export default class MyGif extends React.Component {

  constructor() {
    super();
    this.state = {
      favorite: false,
      url: "http://cliparts.co/cliparts/8cx/ng8/8cxng8pzi.svg"
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
  console.log("toggling favorite", this.state.url);

    if (!this.state.favorite){
      this.setState({favorite: true, url: "http://www.pngmart.com/files/1/Pink-Heart-Transparent-Background.png"})
    } else {
      this.setState({favorite: false, url: "http://cliparts.co/cliparts/8cx/ng8/8cxng8pzi.svg"})
    }
  }

  render() {
    return (
      <div class="parent">
          <img className="Gif" src={this.props.src} onClick={this.toggleFavorite}/>
          <div className="child"><img class="img-heart" src={this.state.url} onClick={this.toggleFavorite}/></div>
      </div>
      );
    }
  }
