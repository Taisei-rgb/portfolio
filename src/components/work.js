import React, { Component } from "react";
import "./home.css"

class Work extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="home__name">
          <div className="name" ><span className="marker">Projects that I've worked on</span></div>
          <div className="home__discription">
            私が3ヶ月間、テックキャンプでプログラミングを学習し、カリキュラム終了後に
            <br></br>
            励んできた個人開発アプリを紹介します。
          </div>
        </div>
      </div>
    )
  }
}

export default Work;