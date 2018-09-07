import React from 'react';
import axios from 'axios'
import styles from '../style/Gif.css'


export default class MyGif extends React.Component {

  constructor() {
    super();
    this.state = {
    }
  }
  // retrieve top trending gifs, # specified by numGifs in state
  componentWillMount(){

  }

  componentDidMount() {

  }

  componentsWillUnmount() {
  }


  render() {
    return (
      <div class="parent">
          <img class="Gif" src={this.props.src} />
          <div class="child"><img class="img-heart" src="http://www.pngmart.com/files/1/Pink-Heart-Transparent-Background.png" /></div>
      </div>
      );
    }
  }
