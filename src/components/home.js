import React, { Component } from "react";
import "./common.css";

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="text">
          <div className="text__title">
            Hi. I'm <span className="marker">Taisei Katagiri</span>
          </div>
          <div className="text__discription">
            Thanks for viewing my portfolio.
            <br></br>
            I am a Japanese Design Engineer, Artist based in Fukushima.
            <br></br>
            I was born and raised in Fukushima.
            <br></br>
            Development / Design / Reading / Music / Photography / etc...
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
