import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios'
import backgroundImage from '../img/gradientBackground.png'


export default class MyGif extends React.Component {

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
    this.setState({width: window.innerWidth, height: window.innerHeight}, () => {
      console.log('height, width: ', this.state.height, ' ', this.state.width);
    })
  }

  trackScrolling() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.getMoreGifs()
    } else {
      console.log("not at bottom");
    }
  }

  getMoreGifs() {
    axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=lIT0h2iTdcoFAyUGDu5Qvkb9NgfhOCNN&limit=${this.state.numGifs}&offset=${this.state.offSet}`)
    .then(response => this.setState({gifs: this.state.gifs.concat(response.data.data), offSet: this.state.offSet+this.state.numGifs}))
  }

  createRow() {

  }

  render() {
    const gifStyle = {
      float: 'middle',
      verticalAlign: 'middle',
      padding: '5px',
      height: 0.2*this.state.height,
      width: 0.25*this.state.width
    }
    return (
      <div className="container">
        <div className="row" style={{flex: 1, flexDirection: 'row', alignItems: 'left', justifyContent: 'space-evenly'}}>
          {this.state.gifs.map( (gif, index) => (
            <img
              src={gif.images.original.url}
              style={{
              verticalAlign: 'middle',
              justifyContent: 'center',
              padding: '5px',
              paddingTop: '10px',
              paddingBottom: '15px',
              height: 0.5*gif.images.original.height,
              width: 0.5*gif.images.original.width
              }}
              key={index}>
            </img>
            ))}
        </div>
      </div>
      );
    }
  }
