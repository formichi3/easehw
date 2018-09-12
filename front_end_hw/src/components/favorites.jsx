import React from 'react';
import axios from 'axios'
import MyGif from './gif.jsx'

export default class MyFavorites extends React.Component {

  constructor() {
    super();
    this.state = {

    }
    this.renderFavs = this.renderFavs.bind(this);
  }
  // retrieve top trending gifs, # specified by numGifs in state
  componentWillMount(){

  }

  componentDidMount() {
  }

  componentsWillUnmount() {

  }

  componentWillReceiveProps(nextProps){
    console.log("Got new props: ", nextProps);
  }

  renderFavs(){
    if(this.props.gifs){
    this.props.favorites.map( (gif, index) => (
        <MyGif
          key={index}
          className="column"
          src={gif.images.original.url}
          style={{
            height: gif.images.original.height*0.5,
            width: gif.images.original.width*0.5
          }}
        />
    ))}
  }


  render() {
    return (
        <div className="row">
          {this.renderFavs()}
        </div>
      );
    }
  }
