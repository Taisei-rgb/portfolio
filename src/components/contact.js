import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="wrapper">
          <div className="home__name">
            <div className="name" ><span className="marker">Social Media</span></div>
            <div className="home__discription">
              Thanks for viewing my portfolio.<br></br>
              I am a Japanese Web Developper, Artist based in Tokyo. Born in Fukushima.
            </div>
            <div className="name" ><span className="marker">Say Hi</span></div>
            <div className="home__discription">
              お仕事関連のご連絡はこちらからお願いします。
            </div>            
          </div>
      </div>
    )
  }
}

export default Contact;