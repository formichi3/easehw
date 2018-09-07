import React from 'react';
import axios from 'axios'
import styles from '../style/Gif.css'
import MyGif from './gif.jsx'

export default class MyGifs extends React.Component {

  constructor() {
    super();
    this.state = {
      gifs: [],
      numGifs: 20,
      offSet: 0,
      width: 0,
      height: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.trackScrolling = this.trackScrolling.bind(this);
    this.getMoreGifs = this.getMoreGifs.bind(this);
  }
  // retrieve top trending gifs, # specified by numGifs in state
  componentWillMount(){
    console.log(styles.Gif);
    this.getMoreGifs()
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions)
    window.addEventListener('scroll', this.trackScrolling)
  }

  componentsWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
    window.removeEventListener('scroll', this.trackScrolling)
  }

  updateWindowDimensions(){
    this.setState({width: window.innerWidth, height: window.innerHeight})
  }

  trackScrolling() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.getMoreGifs()
    }
  }

  getMoreGifs() {
    axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=lIT0h2iTdcoFAyUGDu5Qvkb9NgfhOCNN&limit=${this.state.numGifs}&offset=${this.state.offSet}`)
    .then(response => this.setState({gifs: this.state.gifs.concat(response.data.data), offSet: this.state.offSet+this.state.numGifs}))
  }

  createRow() {

  }

  render() {
    return (
      <div className="container">
        <div className="row" style={{flex: 1, flexDirection: 'row', alignItems: 'left', justifyContent: 'space-evenly'}}>
          {this.state.gifs.map( (gif, index) => (
                <MyGif
                  src={gif.images.original.url}
                />
            ))}
        </div>
      </div>
      );
    }
  }
