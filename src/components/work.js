import React, { Component } from "react";
import Card from "./card"
import kitchHike from "../images/cards/kitchhike.jpg"
import "./common.css"

class Work extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="text">
          <div className="text__title"><span className="marker">Projects that I've worked on</span></div>
          <div className="text__discription">
            私が開発しているサービスをご紹介いたします。
          </div>
          <div className="cards">
            <Card img={kitchHike} title="キッチハイク" description="デザインエンジニアとして、フルスタックに開発をおこなっております。「成果」を意識して日々業務に励んでおります。" link="https://kitchhike.com/" />
          </div>
        </div>
      </div>
    )
  }
}

export default Work;
