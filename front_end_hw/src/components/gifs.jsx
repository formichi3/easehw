import React from 'react';
import axios from 'axios'
import MyGif from './gif.jsx'
import '../style/Gifs.css'

export default class MyGifs extends React.Component {

  constructor() {
    super();
    this.state = {
      gifs: [],
      numGifs: 15,
      offSet: 0,
      trending: 1,
      searchTerm: ""
    }
    this.trackScrolling = this.trackScrolling.bind(this);
    this.getMoreTrendingGifs = this.getMoreTrendingGifs.bind(this);
  }

  componentWillMount(){
    this.getMoreTrendingGifs()
  }

  componentDidMount() {
    window.addEventListener('scroll', this.trackScrolling)
  }

  componentsWillUnmount() {
    window.removeEventListener('scroll', this.trackScrolling)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchTerm === ""){
      this.setState({searchTerm: nextProps.searchTerm, offSet: 0, gifs:[], trending: true}, () => {
        this.getMoreTrendingGifs()
      });
    }
    if (nextProps.searchTerm !== this.state.searchTerm){
      this.setState({searchTerm: nextProps.searchTerm, offSet: 0, gifs:[], trending: false}, () => {
        this.getMoreSearchGifs()
      });
    }
  }


  trackScrolling() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      if (this.state.trending){
        this.getMoreTrendingGifs()
      } else {
        this.getMoreSearchGifs(this.state.searchTerm)
      }
    }
  }

  getMoreTrendingGifs() {
    let url = `https://api.giphy.com/v1/gifs/trending?api_key=lIT0h2iTdcoFAyUGDu5Qvkb9NgfhOCNN&limit=${this.state.numGifs}&offset=${this.state.offSet}`
    console.log(url);
    axios.get(url)
    .then(response => this.setState({gifs: this.state.gifs.concat(response.data.data), offSet: this.state.offSet+this.state.numGifs}))
  }

  getMoreSearchGifs(searchTerm) {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=lIT0h2iTdcoFAyUGDu5Qvkb9NgfhOCNN&q=${this.state.searchTerm}&limit=${this.state.numGifs}&offset=${this.state.offSet}`;
    console.log(url);
    axios.get(url)
    .then(response => this.setState({gifs: this.state.gifs.concat(response.data.data), offSet: this.state.offSet+this.state.numGifs}))
  }

  render() {
    return (
        <div className="row">
          {this.state.gifs.map( (gif, index) => (
                <MyGif
                  key={index}
                  makeFavorite={this.props.makeFavorite}
                  id={gif.id}
                  className="column"
                  src={gif.images.original.url}
                  style={{
                    height: gif.images.original.height*0.5,
                    width: gif.images.original.width*0.5
                  }}
                />
            ))}
        </div>
      );
    }
  }
