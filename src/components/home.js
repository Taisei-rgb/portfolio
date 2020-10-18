import React, { Component } from "react";
import "./home.css"

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
          <div className="home__name">
            <div className="name" >Hi. I'm <span className="marker">Taisei Katagiri</span></div>
            <div className="home__discription">
              Thanks for viewing my portfolio.
              <br></br>
              I am a Japanese Web Developper, Artist based in Tokyo. 
              <br></br>
              I was born and raised in Fukushima.
              <br></br>
              Development / Design / Art / Planning / Music / Photography / etc .
            </div>
          </div>
      </div>
    )
  }
}

export default Home;